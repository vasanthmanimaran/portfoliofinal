"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

function ParticleField({ count = 3000 }) {
  const mesh = useRef();
  const particlesGeometry = useRef();
  
  // Generate particles in a 3D space
  const particlesPosition = new Float32Array(count * 3);
  const particlesColor = new Float32Array(count * 3);
  const particlesSpeed = new Float32Array(count);
  
  // Define colors for the gaming theme
  const colors = [
    new THREE.Color('#1DDE7D'), // gaming-primary
    new THREE.Color('#2E90FA'), // gaming-secondary
    new THREE.Color('#7B66FF'), // gaming-accent
    new THREE.Color('#D946EF')  // gaming-neon
  ];
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    
    // Create particles in a sphere
    const radius = Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    particlesPosition[i3] = radius * Math.sin(phi) * Math.cos(theta);
    particlesPosition[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlesPosition[i3 + 2] = radius * Math.cos(phi);
    
    // Assign random colors from the theme
    const color = colors[Math.floor(Math.random() * colors.length)];
    particlesColor[i3] = color.r;
    particlesColor[i3 + 1] = color.g;
    particlesColor[i3 + 2] = color.b;
    
    // Random movement speed
    particlesSpeed[i] = Math.random() * 0.2 + 0.1;
  }
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (particlesGeometry.current) {
      const positions = particlesGeometry.current.attributes.position.array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // Create flowing movement
        positions[i3] += Math.sin(time * particlesSpeed[i] + i) * 0.01;
        positions[i3 + 1] += Math.cos(time * particlesSpeed[i] + i) * 0.01;
        positions[i3 + 2] += Math.sin(time * particlesSpeed[i] + i) * 0.01;
        
        // Keep particles within bounds
        const distance = Math.sqrt(
          positions[i3] ** 2 + 
          positions[i3 + 1] ** 2 + 
          positions[i3 + 2] ** 2
        );
        
        if (distance > 10) {
          const scale = 10 / distance;
          positions[i3] *= scale;
          positions[i3 + 1] *= scale;
          positions[i3 + 2] *= scale;
        }
      }
      
      particlesGeometry.current.attributes.position.needsUpdate = true;
    }
    
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.05;
      mesh.current.rotation.z = time * 0.03;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry ref={particlesGeometry}>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particlesColor}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        vertexColors={true}
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function MovingLights() {
  const light1 = useRef();
  const light2 = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (light1.current) {
      light1.current.position.x = Math.sin(time * 0.3) * 8;
      light1.current.position.z = Math.cos(time * 0.3) * 8;
      light1.current.intensity = 2 + Math.sin(time) * 0.5;
    }
    
    if (light2.current) {
      light2.current.position.x = Math.sin(time * 0.3 + Math.PI) * 8;
      light2.current.position.z = Math.cos(time * 0.3 + Math.PI) * 8;
      light2.current.intensity = 2 + Math.cos(time) * 0.5;
    }
  });
  
  return (
    <>
      <pointLight
        ref={light1}
        color="#1DDE7D"
        intensity={2}
        distance={20}
        position={[0, 5, 0]}
      />
      <pointLight
        ref={light2}
        color="#D946EF"
        intensity={2}
        distance={20}
        position={[0, -5, 0]}
      />
      <ambientLight intensity={0.1} />
    </>
  );
}

function Scene() {
  return (
    <>
      <MovingLights />
      <ParticleField />
    </>
  );
}

export default function ThreeJSBackground() {
  return (
    <div className="animated-bg">
      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}