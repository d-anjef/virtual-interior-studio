import React from 'react';
import { Environment as DreiEnvironment, Sky, Stars } from '@react-three/drei';

const Environment = ({ 
  preset = 'city',
  background = false,
  showStars = false,
  showSky = false 
}) => {
  return (
    <>
      {/* HDR Environment */}
      <DreiEnvironment 
        preset={preset}
        background={background}
      />

      {/* Optional Sky */}
      {showSky && (
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0.6}
          azimuth={0.25}
        />
      )}

      {/* Optional Stars */}
      {showStars && (
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      )}

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a0f', 10, 50]} />
    </>
  );
};

export default Environment;