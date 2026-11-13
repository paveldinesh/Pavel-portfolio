"use client";

import React, { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface TransfiguringSculptureProps {
  activeTab: number; // 0, 1, or 2
  isHovered: boolean;
  isInView: boolean;
}

interface MeshContentProps {
  activeTab: number;
  mousePosRef: React.RefObject<{ x: number; y: number }>;
}

function MeshContent({ activeTab, mousePosRef }: MeshContentProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orangeRimRef = useRef<THREE.DirectionalLight>(null);

  // High-detail indexed UV Sphere (54x54 = 3,025 vertices) for silky-smooth organic curvature
  const { baseGeo, pos0, pos1, pos2 } = useMemo(() => {
    const base = new THREE.SphereGeometry(1.2, 54, 54);
    const count = base.attributes.position.count;

    const p0 = new Float32Array(count * 3);
    const p1 = new Float32Array(count * 3);
    const p2 = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = base.attributes.position.getX(i);
      const y = base.attributes.position.getY(i);
      const z = base.attributes.position.getZ(i);
      const len = Math.sqrt(x * x + y * y + z * z) || 1;
      const nx = x / len,
        ny = y / len,
        nz = z / len;

      const theta = Math.atan2(nz, nx);
      const phi = Math.asin(Math.max(-1, Math.min(1, ny)));

      // ==========================================
      // 01: Research (Organic twisted knot / ribbon)
      // ==========================================
      const R_knot = 1.05 + 0.35 * Math.cos(3 * theta);
      const y_knot = 0.5 * Math.sin(3 * theta) + 0.28 * Math.sin(phi);
      const r_tube = 0.32 * Math.cos(phi) * (1.0 + 0.22 * Math.sin(2 * theta));
      p0[i * 3] = (R_knot + r_tube * Math.cos(2 * phi + theta)) * Math.cos(theta) * 0.95;
      p0[i * 3 + 1] = (y_knot + r_tube * Math.sin(2 * phi + theta) * 1.1) * 0.95;
      p0[i * 3 + 2] = (R_knot + r_tube * Math.cos(2 * phi + theta)) * Math.sin(theta) * 0.95;

      // ==========================================
      // 02: Design (Rounded cube - order, structure, systems)
      // ==========================================
      const p = 4.8;
      const absX = Math.abs(nx),
        absY = Math.abs(ny),
        absZ = Math.abs(nz);
      const s = Math.pow(Math.pow(absX, p) + Math.pow(absY, p) + Math.pow(absZ, p), -1 / p);
      p1[i * 3] = nx * s * 1.15;
      p1[i * 3 + 1] = ny * s * 1.15;
      p1[i * 3 + 2] = nz * s * 1.15;

      // ==========================================
      // 03: Ship (Polished ring / torus with orange rim light)
      // ==========================================
      const R_ring = 1.18;
      const r_ring = 0.36 * Math.cos(phi);
      p2[i * 3] = (R_ring + r_ring * Math.cos(2 * phi)) * Math.cos(theta);
      p2[i * 3 + 1] = r_ring * Math.sin(2 * phi) * 1.25;
      p2[i * 3 + 2] = (R_ring + r_ring * Math.cos(2 * phi)) * Math.sin(theta);
    }

    return { baseGeo: base, pos0: p0, pos1: p1, pos2: p2 };
  }, []);

  // Geometry copy with current positions
  const geo = useMemo(() => {
    const g = baseGeo.clone();
    g.attributes.position.array.set(pos0);
    g.computeVertexNormals();
    return g;
  }, [baseGeo, pos0]);

  // Morph tracking state
  const fromTabRef = useRef(0);
  const toTabRef = useRef(activeTab);
  const morphStartRef = useRef(performance.now());
  const fromSnapshotRef = useRef<Float32Array>(new Float32Array(pos0));

  useEffect(() => {
    if (activeTab !== toTabRef.current) {
      fromTabRef.current = toTabRef.current;
      toTabRef.current = activeTab;
      morphStartRef.current = performance.now();
      // Snapshot current positions for smooth interruption
      if (geo) {
        fromSnapshotRef.current.set(geo.attributes.position.array as Float32Array);
      }
    }
  }, [activeTab, geo]);

  // Target positions helper
  const getTargetBuffer = (tab: number) => {
    if (tab === 0) return pos0;
    if (tab === 1) return pos1;
    return pos2;
  };

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // 1. Morph animation (1.2s duration with cubic ease-in-out)
    const elapsed = (performance.now() - morphStartRef.current) / 1200;
    const progress = Math.min(1, Math.max(0, elapsed));
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const fromBuf = fromSnapshotRef.current;
    const toBuf = getTargetBuffer(toTabRef.current);
    const currBuf = geo.attributes.position.array as Float32Array;

    for (let k = 0; k < currBuf.length; k++) {
      currBuf[k] = fromBuf[k] + (toBuf[k] - fromBuf[k]) * ease;
    }
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();

    // 2. Slow idle rotation
    meshRef.current.rotation.y += delta * 0.35;

    // 3. Desktop mouse tilt (damped)
    const mouse = mousePosRef.current || { x: 0, y: 0 };
    const targetTiltX = 0.32 + mouse.y * 0.22;
    const targetTiltZ = -mouse.x * 0.22;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetTiltX,
      delta * 3.5
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      targetTiltZ,
      delta * 3.5
    );

    // 4. Dynamic orange rim light (faint on 01/02, stronger on 03 launch)
    if (orangeRimRef.current) {
      const targetIntensity = toTabRef.current === 2 ? 5.5 : 2.0;
      orangeRimRef.current.intensity = THREE.MathUtils.lerp(
        orangeRimRef.current.intensity,
        targetIntensity,
        delta * 3.5
      );
    }

    state.invalidate();
  });

  return (
    <>
      <ambientLight intensity={0.65} color="#ffffff" />
      <directionalLight position={[3, 4, 3]} intensity={3.2} color="#ffffff" />
      <directionalLight position={[-3, 1, 2]} intensity={1.4} color="#99aacc" />
      <directionalLight position={[0, 5, -2]} intensity={1.6} color="#ffffff" />
      <directionalLight
        ref={orangeRimRef}
        position={[2.5, -2.5, -2.5]}
        intensity={2.0}
        color="#F14417"
      />

      <mesh ref={meshRef} geometry={geo}>
        <meshPhysicalMaterial
          color="#131313"
          roughness={0.22}
          metalness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.08}
          reflectivity={0.9}
        />
      </mesh>
    </>
  );
}

export default function TransfiguringSculpture({
  activeTab,
  isHovered,
  isInView,
}: TransfiguringSculptureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const [isTabHidden, setIsTabHidden] = useState(false);

  // Track tab visibility to pause rendering when document is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabHidden(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Track cursor position for desktop tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePosRef.current = { x, y };
  };

  const handleMouseLeave = () => {
    mousePosRef.current = { x: 0, y: 0 };
  };

  const shouldRender = isInView && !isTabHidden;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
    >
      <Canvas
        frameloop={shouldRender ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0.4, 4.3], fov: 38 }}
        className="w-full h-full pointer-events-auto"
      >
        <MeshContent activeTab={activeTab} mousePosRef={mousePosRef} />
      </Canvas>
    </div>
  );
}
