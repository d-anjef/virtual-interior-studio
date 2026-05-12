import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

const Furniture3D = ({ 
  item, 
  isSelected, 
  onSelect, 
  onPositionChange 
}) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  useFrame((state) => {
    if (hovered && !dragging) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setDragging(true);
    onSelect(item);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handlePointerMove = (e) => {
    if (dragging && onPositionChange) {
      e.stopPropagation();
      const { x, z } = e.point;
      onPositionChange(item.id, { x, y: item.position.y, z });
    }
  };

  return (
    <group
      position={[item.position.x, item.position.y, item.position.z]}
      ref={meshRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox
        args={[item.size.width, item.size.height, item.size.depth]}
        radius={0.05}
        smoothness={4}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={isSelected ? '#8b5cf6' : (hovered ? '#6366f1' : item.color)}
          roughness={0.5}
          metalness={0.3}
          emissive={isSelected || hovered ? '#6366f1' : '#000000'}
          emissiveIntensity={isSelected ? 0.3 : (hovered ? 0.1 : 0)}
        />
      </RoundedBox>

      {/* Selection Outline */}
      {isSelected && (
        <lineSegments>
          <edgesGeometry 
            attach="geometry" 
            args={[new THREE.BoxGeometry(
              item.size.width + 0.1, 
              item.size.height + 0.1, 
              item.size.depth + 0.1
            )]} 
          />
          <lineBasicMaterial attach="material" color="#8b5cf6" linewidth={2} />
        </lineSegments>
      )}

      {/* Label */}
      {hovered && (
        <Text
          position={[0, item.size.height / 2 + 0.3, 0]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {item.name || item.type}
        </Text>
      )}
    </group>
  );
};

export default Furniture3D;