import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Room3D = ({ dimensions, wallColor = '#1a1a24', floorColor = '#12121a' }) => {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      {/* Floor */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]} 
        receiveShadow
      >
        <planeGeometry args={[dimensions.width, dimensions.depth]} />
        <meshStandardMaterial 
          color={floorColor}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Back Wall */}
      <mesh 
        position={[0, dimensions.height / 2, -dimensions.depth / 2]} 
        receiveShadow
      >
        <boxGeometry args={[dimensions.width, dimensions.height, 0.1]} />
        <meshStandardMaterial 
          color={wallColor}
          roughness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Left Wall */}
      <mesh 
        position={[-dimensions.width / 2, dimensions.height / 2, 0]} 
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <boxGeometry args={[dimensions.depth, dimensions.height, 0.1]} />
        <meshStandardMaterial 
          color={wallColor}
          roughness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Right Wall */}
      <mesh 
        position={[dimensions.width / 2, dimensions.height / 2, 0]} 
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <boxGeometry args={[dimensions.depth, dimensions.height, 0.1]} />
        <meshStandardMaterial 
          color={wallColor}
          roughness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ceiling */}
      <mesh 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[0, dimensions.height, 0]}
        receiveShadow
      >
        <planeGeometry args={[dimensions.width, dimensions.depth]} />
        <meshStandardMaterial 
          color={wallColor}
          roughness={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Room3D;