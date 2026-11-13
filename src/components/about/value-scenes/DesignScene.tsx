"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

interface SceneProps {
  active: boolean;
}

const BASE_ROT_X = -0.28;
const BASE_ROT_Y = 0.48;
const BASE_ROT_Z = 0.12;

export function DesignScene({ active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const panelBackRef = useRef<THREE.Mesh>(null);
  const panelMidRef = useRef<THREE.Mesh>(null);
  const panelFrontRef = useRef<THREE.Mesh>(null);
  const midEdgeRef = useRef<THREE.LineSegments>(null);

  // Transition state
  const animState = useRef({ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 });
  const timeAcc = useRef(0);

  // Middle panel glowing edge geometry
  const edgeGeometry = useMemo(() => {
    // Generate clean rounded rect outline for middle panel
    const width = 2.2;
    const height = 1.45;
    const radius = 0.12;
    const shape = new THREE.Shape();
    const x = -width / 2;
    const y = -height / 2;

    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);

    const pts = shape.getPoints(64);
    const lineGeom = new THREE.BufferGeometry().setFromPoints(pts);
    return lineGeom;
  }, []);

  useFrame((state, delta) => {
    // Smooth crossfade damping
    const targetAlpha = active ? 1 : 0;
    const targetScale = active ? 1 : 0.92;
    animState.current.opacity = THREE.MathUtils.damp(
      animState.current.opacity,
      targetAlpha,
      9,
      delta
    );
    animState.current.scale = THREE.MathUtils.damp(
      animState.current.scale,
      targetScale,
      9,
      delta
    );

    if (groupRef.current) {
      groupRef.current.visible = animState.current.opacity > 0.005;
      groupRef.current.scale.setScalar(animState.current.scale);
    }

    if (!groupRef.current?.visible) return;

    timeAcc.current += delta;
    const t = timeAcc.current;

    // Sinusoidal 6-second separation cycle
    const cycle = Math.sin((t * Math.PI * 2) / 6) * 0.5 + 0.5; // 0 to 1
    const separation = 0.16 + cycle * 0.40;

    if (panelBackRef.current) {
      panelBackRef.current.position.z = -separation;
    }
    if (panelFrontRef.current) {
      panelFrontRef.current.position.z = separation;
    }

    // Slight desktop tilt toward cursor (damped)
    const pointer = state.pointer;
    const targetRotX = BASE_ROT_X - pointer.y * 0.16;
    const targetRotY = BASE_ROT_Y + pointer.x * 0.20;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        4.5,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY,
        4.5,
        delta
      );
      groupRef.current.rotation.z = BASE_ROT_Z;
    }
  });

  return (
    <group ref={groupRef} rotation={[BASE_ROT_X, BASE_ROT_Y, BASE_ROT_Z]}>
      {/* Back Panel */}
      <mesh ref={panelBackRef} position={[0, 0, -0.16]}>
        <RoundedBox args={[2.2, 1.45, 0.08]} radius={0.12} smoothness={4}>
          <meshPhysicalMaterial
            color="#090909"
            roughness={0.22}
            metalness={0.15}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            reflectivity={0.9}
          />
        </RoundedBox>
      </mesh>

      {/* Middle Panel with Thin Glowing Orange Edge */}
      <group position={[0, 0, 0]}>
        <mesh ref={panelMidRef}>
          <RoundedBox args={[2.2, 1.45, 0.08]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color="#080808"
              roughness={0.20}
              metalness={0.12}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
              reflectivity={0.95}
            />
          </RoundedBox>
        </mesh>

        {/* Glowing Orange Edge Perimeter (Front & Back Faces) */}
        <lineLoop geometry={edgeGeometry} position={[0, 0, 0.042]}>
          <lineBasicMaterial
            color="#F14417"
            linewidth={1.5}
            transparent
            opacity={0.92}
          />
        </lineLoop>
        <lineLoop geometry={edgeGeometry} position={[0, 0, -0.042]}>
          <lineBasicMaterial
            color="#F14417"
            linewidth={1.5}
            transparent
            opacity={0.92}
          />
        </lineLoop>
      </group>

      {/* Front Panel */}
      <mesh ref={panelFrontRef} position={[0, 0, 0.16]}>
        <RoundedBox args={[2.2, 1.45, 0.08]} radius={0.12} smoothness={4}>
          <meshPhysicalMaterial
            color="#0a0a0a"
            roughness={0.22}
            metalness={0.15}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            reflectivity={0.9}
          />
        </RoundedBox>
      </mesh>
    </group>
  );
}
