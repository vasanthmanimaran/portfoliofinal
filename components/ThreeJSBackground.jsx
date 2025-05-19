"use client";

import * as THREE from "three";
import { useFrame, Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Particles({ count = 2000 }) {
  const points = new Float32Array(count * 3);
  const positions = new THREE.BufferAttribute(points, 3);

  for (let i = 0; i < count; i++) {
    points[i * 3] = (Math.random() - 0.5) * 10; // x
    points[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
    points[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
  }

  positions.needsUpdate = true;

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          {...positions}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <Particles count={2000} />
      <EffectComposer>
        <Bloom
          intensity={1.0}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}