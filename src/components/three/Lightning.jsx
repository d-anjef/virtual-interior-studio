import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useHelper } from '@react-three/drei';
import * as THREE from 'three';

const Lighting = ({ 
  intensity = 1, 
  color = '#ffffff',
  ambientIntensity = 0.3,
  showHelpers = false 
}) => {
  const directionalRef = useRef();
  const spotRef = useRef();

  // Optional helpers for debugging
  if (showHelpers && directionalRef.current) {
    useHelper(directionalRef, THREE.DirectionalLightHelper, 1, 'red');
  }

  return (
    <>
      {/* Ambient Light - Base illumination */}
      <ambientLight 
        intensity={ambientIntensity * intensity} 
        color={color} 
      />

      {/* Directional Light - Main light source (sun) */}
      <directionalLight
        ref={directionalRef}
        position={[10, 15, 5]}
        intensity={intensity}
        color={color}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Point Lights - Accent lighting */}
      <pointLight 
        position={[-5, 5, -5]} 
        intensity={intensity * 0.5} 
        color="#6366f1"
        distance={15}
        decay={2}
      />
      
      <pointLight 
        position={[5, 5, 5]} 
        intensity={intensity * 0.5} 
        color="#8b5cf6"
        distance={15}
        decay={2}
      />

      {/* Spot Light - Dramatic effect */}
      <spotLight
        ref={spotRef}
        position={[0, 10, 0]}
        angle={Math.PI / 6}
        penumbra={0.5}
        intensity={intensity * 0.8}
        color="#d4af37"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Hemisphere Light - Sky/Ground ambient */}
      <hemisphereLight
        skyColor="#87ceeb"
        groundColor="#1a1a24"
        intensity={intensity * 0.2}
      />
    </>
  );
};

export default Lighting;