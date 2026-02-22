import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export function WebflowHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0.8],
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [binaryDigits] = useState(() =>
    Array.from({ length: 200 }, () =>
      Math.random() > 0.5 ? "1" : "0",
    ),
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      style={{ perspective: "1000px", position: "relative" }}
    >
      {/* Matrix-style binary rain */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-green-500/40 font-mono text-xs"
            style={{ left: `${(i * 100) / 30}%` }}
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          >
            {binaryDigits.slice(i * 3, i * 3 + 10).join(" ")}
          </motion.div>
        ))}
      </div>

      {/* Neural network background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full">
          {/* Neural network nodes and connections */}
          {Array.from({ length: 25 }).map((_, i) => {
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
                stroke="url(#heroGradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
          })}
          <defs>
            <linearGradient
              id="heroGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* AI Brain circuit pattern */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.svg
          width="800"
          height="800"
          viewBox="0 0 600 600"
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <circle
            cx="300"
            cy="300"
            r="250"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <circle
            cx="300"
            cy="300"
            r="200"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <circle
            cx="300"
            cy="300"
            r="150"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            const x1 =
              300 + 150 * Math.cos((angle * Math.PI) / 180);
            const y1 =
              300 + 150 * Math.sin((angle * Math.PI) / 180);
            const x2 =
              300 + 250 * Math.cos((angle * Math.PI) / 180);
            const y2 =
              300 + 250 * Math.sin((angle * Math.PI) / 180);
            return (
              <g key={`circuit-${i}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="0.5"
                />
                <circle cx={x2} cy={y2} r="4" fill="white" />
              </g>
            );
          })}
        </motion.svg>
      </div>

      {/* Floating Hexagons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotateZ: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <svg width="60" height="60" viewBox="0 0 100 100">
              <polygon
                points="50,10 90,30 90,70 50,90 10,70 10,30"
                fill="none"
                stroke="url(#heroGradient)"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Animated AI nodes around center */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12;
        const radius = 50;
        return (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [
                Math.cos((angle * Math.PI) / 180) * radius,
                Math.cos((angle * Math.PI) / 180) *
                  (radius + 30),
                Math.cos((angle * Math.PI) / 180) * radius,
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * radius,
                Math.sin((angle * Math.PI) / 180) *
                  (radius + 30),
                Math.sin((angle * Math.PI) / 180) * radius,
              ],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        );
      })}

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto"
      >
        {/* Hexagon background for logo */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-20 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="250" height="250" viewBox="0 0 100 100">
            <polygon
              points="50,10 90,30 90,70 50,90 10,70 10,30"
              fill="none"
              stroke="url(#heroGradient)"
              strokeWidth="0.3"
              opacity="0.2"
            />
          </svg>
        </motion.div>

        {/* Small intro with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-blue-400/80 text-xs tracking-wider font-mono mb-2">
            {"<initializing />"}
          </p>
          <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">
            Data Scientist • ML Engineer • AI Researcher
          </p>
        </motion.div>

        {/* Main heading with gradient and glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none mb-8"
          style={{
            fontWeight: 900,
            letterSpacing: "-0.02em",
          }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                "drop-shadow(0 0 40px rgba(139, 92, 246, 0.5))",
                "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            HIRAK
          </motion.span>
          <br />
          <motion.span
            className="inline-block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))",
                "drop-shadow(0 0 40px rgba(6, 182, 212, 0.5))",
                "drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            MODI
          </motion.span>
        </motion.h1>

        {/* Subtitle with terminal-style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Creating intelligent systems that shape the future.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-mono">
            <span className="text-green-400">$</span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
              Master's @ Purdue University
            </span>
          </div>
        </motion.div>

        {/* CTA Links with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="mailto:hirak.modi2025@gmail.com"
            className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-white">
              Hire Me
            </span>
            <ArrowDown
              className="relative z-10 rotate-[-90deg] group-hover:translate-x-1 transition-transform"
              size={20}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          </motion.a>
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Hirak26"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hirak-modi-6a08181b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:hirak.modi2025@gmail.com"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Terminal-style status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mb-8"
        >
          <div className="inline-block bg-black/40 border border-white/10 rounded-lg px-6 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="text-green-400">● online</span>
              <span className="text-blue-400">
                [ 4 publications ]
              </span>
              <span className="text-purple-400">
                [ 6+ projects ]
              </span>
              <span className="text-cyan-400">
                [ ML/AI Expert ]
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-sm text-gray-500 tracking-wider font-mono">
            SCROLL TO EXPLORE
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={20} className="text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
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
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}