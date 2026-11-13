"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface SceneProps {
  active: boolean;
}

const TRAIL_LENGTH = 32;

export function ShipScene({ active }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const arrowGroupRef = useRef<THREE.Group>(null);
  const trailLineRef = useRef<THREE.Line>(null);
  const trailPointsRef = useRef<THREE.Points>(null);

  // Transition state
  const animState = useRef({ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 });
  const timeAcc = useRef(0);

  // Historic positions for smooth light trail
  const trailHistory = useRef<{ x: number; y: number; z: number }[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0, z: -1.95 }))
  );

  // Build faceted (flat-shaded) 3D arrow geometry
  const arrowGeometry = useMemo(() => {
    // 3D Supersonic Chevron Arrow
    const pNose = new THREE.Vector3(0, 0, 1.25);
    const pSpineTop = new THREE.Vector3(0, 0.28, 0.1);
    const pSpineBottom = new THREE.Vector3(0, -0.28, 0.1);
    const pLeftWing = new THREE.Vector3(-0.95, 0, -0.65);
    const pRightWing = new THREE.Vector3(0.95, 0, -0.65);
    const pTailCenter = new THREE.Vector3(0, 0, -0.35);

    const positions: number[] = [];

    const addTri = (a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3) => {
      positions.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    };

    // Top faceted hull
    addTri(pNose, pSpineTop, pRightWing);
    addTri(pNose, pLeftWing, pSpineTop);
    addTri(pSpineTop, pTailCenter, pRightWing);
    addTri(pSpineTop, pLeftWing, pTailCenter);

    // Bottom faceted hull
    addTri(pNose, pRightWing, pSpineBottom);
    addTri(pNose, pSpineBottom, pLeftWing);
    addTri(pSpineBottom, pRightWing, pTailCenter);
    addTri(pSpineBottom, pTailCenter, pLeftWing);

    // Rear exhaust facets
    addTri(pSpineTop, pRightWing, pTailCenter);
    addTri(pSpineTop, pTailCenter, pLeftWing);
    addTri(pSpineBottom, pTailCenter, pRightWing);
    addTri(pSpineBottom, pLeftWing, pTailCenter);

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geom.computeVertexNormals();
    return geom;
  }, []);

  // Soft glowing light trail geometry and primitive line
  const { trailLineObject, trailPointsObject } = useMemo(() => {
    const positions = new Float32Array(TRAIL_LENGTH * 3);
    const colors = new Float32Array(TRAIL_LENGTH * 3);

    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const alpha = Math.pow(1 - i / TRAIL_LENGTH, 1.8);
      // Fading orange #F14417 = (0.945, 0.267, 0.09)
      colors[i * 3] = 0.945 * alpha;
      colors[i * 3 + 1] = 0.267 * alpha;
      colors[i * 3 + 2] = 0.09 * alpha;
    }

    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    lineGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lineObj = new THREE.Line(lineGeom, lineMat);

    const partGeom = new THREE.BufferGeometry();
    partGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
    partGeom.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));

    const partMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const partObj = new THREE.Points(partGeom, partMat);

    return { trailLineObject: lineObj, trailPointsObject: partObj };
  }, []);

  useFrame((_, delta) => {
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

    // Sinusoidal 6-second glide through the ring
    const loopTime = (t * Math.PI * 2) / 6;
    const zPos = -Math.cos(loopTime) * 1.95;
    // Slight pitch angle as it glides
    const pitch = Math.sin(loopTime) * 0.06;

    if (arrowGroupRef.current) {
      arrowGroupRef.current.position.z = zPos;
      arrowGroupRef.current.rotation.x = pitch;
    }

    // Update trailing tail history
    const history = trailHistory.current;
    // Shift points back
    for (let i = history.length - 1; i > 0; i--) {
      history[i].x = history[i - 1].x;
      history[i].y = history[i - 1].y;
      history[i].z = history[i - 1].z;
    }
    // New head at arrow tail
    history[0] = {
      x: 0,
      y: 0,
      z: zPos - 0.45,
    };

    // Update trail line & points buffer
    if (trailLineRef.current && trailPointsRef.current) {
      const linePos = trailLineRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const partPos = trailPointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const arr = linePos.array as Float32Array;
      const partArr = partPos.array as Float32Array;

      for (let i = 0; i < TRAIL_LENGTH; i++) {
        arr[i * 3] = history[i].x;
        arr[i * 3 + 1] = history[i].y;
        arr[i * 3 + 2] = history[i].z;

        partArr[i * 3] = history[i].x;
        partArr[i * 3 + 1] = history[i].y;
        partArr[i * 3 + 2] = history[i].z;
      }
      linePos.needsUpdate = true;
      partPos.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.18, 0.42, 0]}>
      {/* Thin Polished Stationary Ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.25, 0.038, 32, 100]} />
        <meshPhysicalMaterial
          color="#161616"
          roughness={0.16}
          metalness={0.88}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          reflectivity={0.95}
        />
      </mesh>

      {/* Gliding Faceted Glass Arrow */}
      <group ref={arrowGroupRef}>
        <mesh geometry={arrowGeometry}>
          <meshPhysicalMaterial
            color="#090909"
            roughness={0.22}
            metalness={0.22}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            flatShading={true}
            reflectivity={0.9}
          />
        </mesh>
      </group>

      {/* Soft Orange Glowing Light Trail */}
      <primitive object={trailLineObject} ref={trailLineRef} />
      <primitive object={trailPointsObject} ref={trailPointsRef} />
    </group>
  );
}
