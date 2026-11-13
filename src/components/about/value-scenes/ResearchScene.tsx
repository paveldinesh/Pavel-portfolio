"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface SceneProps {
  active: boolean;
}

const LINE_COUNT = 36;
const POINTS_PER_LINE = 24;
const PARTICLE_COUNT = 200;

export function ResearchScene({ active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Smooth cross-fade transition state
  const animState = useRef({ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 });

  // Generate 36 converging curved lines
  const { lineGeometry, lineUniforms } = useMemo(() => {
    const positions: number[] = [];
    const progresses: number[] = [];

    for (let i = 0; i < LINE_COUNT; i++) {
      // Golden spiral distribution on outer sphere (r: 2.3 to 2.8)
      const phi = Math.acos(-1 + (2 * i) / LINE_COUNT);
      const theta = Math.sqrt(LINE_COUNT * Math.PI) * phi;
      const rOuter = 2.4 + (i % 5) * 0.1;

      const p0 = new THREE.Vector3(
        rOuter * Math.sin(phi) * Math.cos(theta),
        rOuter * Math.cos(phi),
        rOuter * Math.sin(phi) * Math.sin(theta)
      );

      // End point near sphere surface (r ~ 0.92)
      const rInner = 0.92;
      const p2 = p0.clone().normalize().multiplyScalar(rInner);

      // Mid-control point swirled tangentially for an organic curved trajectory
      const axis = new THREE.Vector3(0, 1, 0).cross(p0).normalize();
      if (axis.lengthSq() < 0.01) axis.set(1, 0, 0);
      const p1 = p0
        .clone()
        .multiplyScalar(0.58)
        .applyAxisAngle(axis, 0.42 + (i % 3) * 0.1);

      const curve = new THREE.QuadraticBezierCurve3(p0, p1, p2);
      const pts = curve.getPoints(POINTS_PER_LINE - 1);

      for (let j = 0; j < pts.length - 1; j++) {
        positions.push(pts[j].x, pts[j].y, pts[j].z);
        progresses.push(j / (pts.length - 1));

        positions.push(pts[j + 1].x, pts[j + 1].y, pts[j + 1].z);
        progresses.push((j + 1) / (pts.length - 1));
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geom.setAttribute("aProgress", new THREE.Float32BufferAttribute(progresses, 1));

    const uniforms = {
      uTime: { value: 0 },
      uOpacity: { value: 1.0 },
    };

    return { lineGeometry: geom, lineUniforms: uniforms };
  }, []);

  // Custom vertex and fragment shaders for inward pulsing lines
  const lineShader = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: lineUniforms,
      vertexShader: `
        attribute float aProgress;
        varying float vProgress;
        void main() {
          vProgress = aProgress;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        varying float vProgress;
        void main() {
          float wave = fract(uTime * 0.45 - vProgress);
          float glow = smoothstep(0.80, 1.0, 1.0 - wave);
          
          vec3 orangeBase = vec3(0.945, 0.267, 0.09); // #F14417
          vec3 orangeHot = vec3(1.0, 0.72, 0.45);
          vec3 col = mix(orangeBase, orangeHot, glow * 0.85);
          
          float alpha = (0.18 + glow * 0.82) * uOpacity;
          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }, [lineUniforms]);

  // Generate ~200 inward drifting particles
  const { particleData, particleGeometry } = useMemo(() => {
    const data: { radius: number; theta: number; phi: number; speed: number }[] = [];
    const positions = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 1.0 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = 0.25 + Math.random() * 0.35;

      data.push({ radius, theta, phi, speed });

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    return { particleData: data, particleGeometry: geom };
  }, []);

  useFrame((_, delta) => {
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

    // Rotate the glossy black sphere slowly
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.22;
      sphereRef.current.rotation.x += delta * 0.08;
    }

    // Update line shader uniforms directly
    lineUniforms.uTime.value += delta;
    lineUniforms.uOpacity.value = animState.current.opacity;

    // Update drifting particles
    if (particlesRef.current) {
      const posAttr = particlesRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particleData[i];
        p.radius -= p.speed * delta;
        if (p.radius < 0.94) {
          p.radius = 2.5 + Math.random() * 0.5;
        }

        posArray[i * 3] = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
        posArray[i * 3 + 1] = p.radius * Math.cos(p.phi);
        posArray[i * 3 + 2] = p.radius * Math.sin(p.phi) * Math.sin(p.theta);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Glossy Black Obsidian Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshPhysicalMaterial
          color="#080808"
          roughness={0.22}
          metalness={0.12}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          reflectivity={0.9}
        />
      </mesh>

      {/* Converging Curved Lines with Inward Pulse */}
      <lineSegments
        geometry={lineGeometry}
        material={lineShader}
      />

      {/* Drifting Inward Particles */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.038}
          color="#F14417"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
