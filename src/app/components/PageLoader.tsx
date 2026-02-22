import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Hide loader after loading completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Generate random binary digits
  const binaryDigits = Array.from({ length: 100 }, () => Math.random() > 0.5 ? '1' : '0');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Matrix-style binary rain */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-500/30 font-mono text-xs"
                style={{ left: `${(i * 100) / 30}%` }}
                animate={{
                  y: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 2,
                }}
              >
                {binaryDigits.slice(i * 3, i * 3 + 10).join(' ')}
              </motion.div>
            ))}
          </div>

          {/* Neural network background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              {/* Neural network nodes and connections */}
              {Array.from({ length: 20 }).map((_, i) => {
                const x1 = Math.random() * 100;
                const y1 = Math.random() * 100;
                const x2 = Math.random() * 100;
                const y2 = Math.random() * 100;
                return (
                  <motion.line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                );
              })}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* AI Brain circuit pattern */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <motion.svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="300" cy="300" r="250" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="200" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="150" fill="none" stroke="white" strokeWidth="0.5" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                const x1 = 300 + 150 * Math.cos((angle * Math.PI) / 180);
                const y1 = 300 + 150 * Math.sin((angle * Math.PI) / 180);
                const x2 = 300 + 250 * Math.cos((angle * Math.PI) / 180);
                const y2 = 300 + 250 * Math.sin((angle * Math.PI) / 180);
                return (
                  <g key={i}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.5" />
                    <circle cx={x2} cy={y2} r="4" fill="white" />
                  </g>
                );
              })}
            </motion.svg>
          </div>

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* AI-themed logo animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 relative"
            >
              {/* Hexagon background */}
              <motion.div
                className="absolute -inset-20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <polygon
                    points="50,10 90,30 90,70 50,90 10,70 10,30"
                    fill="none"
                    stroke="url(#hexGradient)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              <motion.h1
                className="text-7xl md:text-9xl font-bold mb-4 relative"
                style={{ fontWeight: 900, letterSpacing: '-0.02em' }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  H
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                >
                  M
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-400 text-sm tracking-[0.3em] uppercase"
              >
                Hirak Modi
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-blue-400/60 text-xs tracking-wider mt-2 font-mono"
              >
                {'<AI Engineer />'}
              </motion.p>
            </motion.div>

            {/* Progress bar with code-style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-64 md:w-96 mx-auto"
            >
              <div className="relative mb-4">
                {/* Terminal-style progress */}
                <div className="bg-black/40 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-white/40 text-xs ml-2 font-mono">terminal</span>
                  </div>
                  <div className="font-mono text-xs text-left space-y-1">
                    <p className="text-green-400">$ initializing...</p>
                    <p className="text-blue-400">$ loading neural networks...</p>
                    <p className="text-purple-400">$ compiling portfolio...</p>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-3">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                    <p className="text-white/60 text-center mt-2">{progress}%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Loading text with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <p className="text-white/40 text-xs tracking-wider font-mono">
                Initializing AI Portfolio System...
              </p>
            </motion.div>
          </div>

          {/* Animated AI nodes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            const radius = 40;
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * radius,
                    Math.cos((angle * Math.PI) / 180) * (radius + 20),
                    Math.cos((angle * Math.PI) / 180) * radius,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * radius,
                    Math.sin((angle * Math.PI) / 180) * (radius + 20),
                    Math.sin((angle * Math.PI) / 180) * radius,
                  ],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}