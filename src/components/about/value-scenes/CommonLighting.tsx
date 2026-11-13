"use client";

import React from "react";

export function CommonLighting() {
  return (
    <>
      <ambientLight intensity={0.45} />
      {/* Key directional light */}
      <directionalLight position={[4, 5, 4]} intensity={2.4} color="#ffffff" />
      {/* Fill directional light */}
      <directionalLight position={[-4, -2, -3]} intensity={0.9} color="#8898aa" />
      {/* Orange rim light for glossy black sheen */}
      <pointLight position={[0, 2.5, -3.5]} intensity={5.0} color="#F14417" distance={8} />
      {/* Subtle bottom accent light */}
      <pointLight position={[0, -2, 2.5]} intensity={1.2} color="#ffffff" distance={6} />
    </>
  );
}
