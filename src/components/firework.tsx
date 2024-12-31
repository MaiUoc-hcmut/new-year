// components/Fireworks.tsx
'use client';

import { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const Firework = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.98,
        gravity: 1.5,
        particles: 50,
        traceSpeed: 2,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        sound: {
            enabled: true,
            files: ['/sounds/fireworks-cut.mp3'],
            volume: {
                min: 5,
                max: 20
            }
        },
        mouse: {
            click: true,
            move: false,
            max: 10
        },
        hue: {
          min: 0,
          max: 360,
        },
        delay: {
          min: 15,
          max: 30,
        },
      });

      fireworks.start();

      // Cleanup on component unmount
      return () => fireworks.stop();
    }
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Firework;
