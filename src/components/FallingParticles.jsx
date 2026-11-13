import React, { useMemo } from 'react';

export default function FallingParticles({ count = 28 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 3.7 + Math.random() * 5) % 98}%`,
      top: `${Math.random() * 95}%`,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.6 + 0.25,
      isGold: i % 2 === 0,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none animate-sparkle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.isGold ? '#D8B46A' : '#FAF5EE',
            boxShadow: p.isGold
              ? '0 0 6px 1px rgba(216, 180, 106, 0.7)'
              : '0 0 5px 1px rgba(255, 255, 255, 0.6)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

