import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AIBackground() {
  const [binaryDigits] = useState(() =>
    Array.from({ length: 200 }, () => (Math.random() > 0.5 ? '1' : '0'))
  );

  // Generate origami birds data
  const birds = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    scale: 0.5 + Math.random() * 0.5,
  }));

  return (
    <>
      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        {Array.from({ length: 30 }).map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = Math.random() * 100;
          const y2 = Math.random() * 100;
          return (
            <motion.line
              key={`neural-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          );
        })}
        {/* Neural nodes */}
        {Array.from({ length: 30 }).map((_, i) => {
          const cx = Math.random() * 100;
          const cy = Math.random() * 100;
          return (
            <motion.circle
              key={`node-${i}`}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r="2"
              fill="url(#neuralGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          );
        })}
      </svg>

      {/* Code Stream Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs font-mono text-blue-500/20"
            style={{
              left: `${(i * 100) / 20}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            <div className="flex flex-col gap-1">
              {binaryDigits.slice(i * 8, i * 8 + 8).map((digit, idx) => (
                <motion.span
                  key={idx}
                  animate={{ opacity: [0.1, 0.5, 0.1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: idx * 0.1,
                  }}
                >
                  {digit}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Origami Paper Birds Flying */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {birds.map((bird) => (
          <motion.div
            key={bird.id}
            className="absolute"
            style={{
              left: `${bird.startX}%`,
              top: `${bird.startY}%`,
            }}
            animate={{
              x: [
                0,
                Math.sin(bird.id) * 300,
                Math.cos(bird.id) * 400,
                -Math.sin(bird.id) * 300,
                0,
              ],
              y: [
                0,
                -Math.cos(bird.id) * 200,
                Math.sin(bird.id) * 250,
                -Math.sin(bird.id) * 150,
                0,
              ],
              rotateZ: [0, 360, 720, 1080, 1440],
              scale: [bird.scale, bird.scale * 1.2, bird.scale, bird.scale * 0.8, bird.scale],
            }}
            transition={{
              duration: bird.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bird.delay,
            }}
          >
            {/* Origami Bird SVG */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              className="drop-shadow-lg"
            >
              <defs>
                <linearGradient id={`birdGradient-${bird.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Origami bird shape */}
              <motion.path
                d="M 50 20 L 70 50 L 50 45 L 30 50 Z"
                fill={`url(#birdGradient-${bird.id})`}
                stroke="white"
                strokeWidth="0.5"
                animate={{
                  d: [
                    'M 50 20 L 70 50 L 50 45 L 30 50 Z',
                    'M 50 20 L 75 48 L 50 50 L 25 48 Z',
                    'M 50 20 L 70 50 L 50 45 L 30 50 Z',
                  ],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.path
                d="M 50 45 L 50 70 L 60 55 Z"
                fill={`url(#birdGradient-${bird.id})`}
                stroke="white"
                strokeWidth="0.5"
                opacity="0.8"
              />
              <motion.path
                d="M 50 45 L 50 70 L 40 55 Z"
                fill={`url(#birdGradient-${bird.id})`}
                stroke="white"
                strokeWidth="0.5"
                opacity="0.8"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Floating Geometric Shapes - Tech Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotateZ: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 ? (
              // Hexagon
              <svg width="60" height="60" viewBox="0 0 100 100">
                <polygon
                  points="50,10 90,30 90,70 50,90 10,70 10,30"
                  fill="none"
                  stroke="url(#neuralGradient)"
                  strokeWidth="1"
                  opacity="0.4"
                />
              </svg>
            ) : i % 3 === 1 ? (
              // Triangle
              <svg width="50" height="50" viewBox="0 0 100 100">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke="url(#neuralGradient)"
                  strokeWidth="1"
                  opacity="0.4"
                />
              </svg>
            ) : (
              // Square
              <svg width="50" height="50" viewBox="0 0 100 100">
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  fill="none"
                  stroke="url(#neuralGradient)"
                  strokeWidth="1"
                  opacity="0.4"
                  transform="rotate(45 50 50)"
                />
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      {/* AI Data Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* AI Brain Waves */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M 0 ${50 + i * 10} Q 25 ${40 + i * 10}, 50 ${50 + i * 10} T 100 ${50 + i * 10}`}
            stroke="url(#neuralGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
    </>
  );
}
