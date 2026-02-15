import { motion } from "motion/react";
import HeavyBackground3D from "./HeavyBackground3D";

export function ChicagoHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-screen 3D background */}
      <HeavyBackground3D />

      {/* Optional overlay to keep text readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          HIRAK MODI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-4 text-base text-white/80 sm:text-lg"
        >
          Data Scientist | ML Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-2 text-white/70"
        >
          Master's @ Purdue University | Based in Chicago Area
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            className="rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur hover:bg-white/15"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur hover:bg-white/15"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur hover:bg-white/15"
            href="#contact"
          >
            ✉️ Contact
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          href="#projects"
          className="mt-10 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
        >
          Start your journey
        </motion.a>
      </div>
    </section>
  );
}
