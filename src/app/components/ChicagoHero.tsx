import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function ChicagoHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Building class for Chicago skyline
    class Building {
      x: number;
      z: number;
      width: number;
      height: number;
      depth: number;
      color: string;
      windows: Array<{ x: number; y: number; lit: boolean }>;

      constructor(x: number, z: number) {
        this.x = x;
        this.z = z;
        this.width = 40 + Math.random() * 60;
        this.height = 100 + Math.random() * 300;
        this.depth = 40 + Math.random() * 40;
        
        const colors = ['#1e40af', '#7c3aed', '#0891b2', '#4338ca', '#6366f1'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Create windows
        this.windows = [];
        const windowRows = Math.floor(this.height / 20);
        const windowCols = Math.floor(this.width / 15);
        
        for (let row = 0; row < windowRows; row++) {
          for (let col = 0; col < windowCols; col++) {
            this.windows.push({
              x: col * 15 + 5,
              y: row * 20 + 5,
              lit: Math.random() > 0.3
            });
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D, cameraX: number, cameraY: number) {
        const scale = 800 / (this.z + 800);
        const screenX = (this.x - cameraX) * scale + canvas.width / 2;
        const screenY = canvas.height - (this.height - cameraY) * scale - 100;
        const screenWidth = this.width * scale;
        const screenHeight = this.height * scale;

        if (screenX + screenWidth < 0 || screenX > canvas.width) return;

        // Draw building body
        const gradient = ctx.createLinearGradient(screenX, screenY, screenX + screenWidth, screenY);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, '#0f172a');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(screenX, screenY, screenWidth, screenHeight);

        // Draw windows
        this.windows.forEach(window => {
          if (window.lit && scale > 0.3) {
            const wx = screenX + window.x * scale;
            const wy = screenY + window.y * scale;
            const wSize = 4 * scale;
            
            ctx.fillStyle = `rgba(251, 191, 36, ${0.6 + Math.random() * 0.4})`;
            ctx.fillRect(wx, wy, wSize, wSize);
          }
        });

        // Building edge highlight
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.3 * scale})`;
        ctx.lineWidth = 2;
        ctx.strokeRect(screenX, screenY, screenWidth, screenHeight);
      }
    }

    // Create Chicago skyline
    const buildings: Building[] = [];
    for (let i = 0; i < 80; i++) {
      buildings.push(
        new Building(
          (Math.random() - 0.5) * 2000,
          Math.random() * 1500 + 200
        )
      );
    }

    // Sort by depth for proper rendering
    buildings.sort((a, b) => b.z - a.z);

    // Stars
    const stars: Array<{ x: number; y: number; size: number; brightness: number }> = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.6,
        size: Math.random() * 2,
        brightness: Math.random()
      });
    }

    let cameraX = 0;
    let cameraY = 0;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Gentle camera movement
      cameraX = Math.sin(time * 0.3) * 50;
      cameraY = Math.sin(time * 0.2) * 20;

      // Clear canvas with gradient sky
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      skyGradient.addColorStop(0, '#0f172a');
      skyGradient.addColorStop(0.5, '#1e293b');
      skyGradient.addColorStop(1, '#1e3a8a');
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        const twinkle = Math.sin(time * 2 + star.x) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw buildings
      buildings.forEach(building => building.draw(ctx, cameraX, cameraY));

      // Ground/street
      const groundGradient = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
      groundGradient.addColorStop(0, 'rgba(30, 41, 59, 0.8)');
      groundGradient.addColorStop(1, '#0f172a');
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

      // Street lights effect
      for (let i = 0; i < canvas.width; i += 200) {
        const lightGradient = ctx.createRadialGradient(
          i, canvas.height - 80, 0,
          i, canvas.height - 80, 100
        );
        lightGradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
        lightGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = lightGradient;
        ctx.fillRect(i - 100, canvas.height - 180, 200, 100);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900 z-5" />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-6"
          >
            <div className="text-6xl mb-4">🏙️</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight"
            style={{
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)'
            }}
          >
            HIRAK MODI
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-6"
          >
            <p className="text-2xl md:text-4xl text-blue-300 font-semibold tracking-wide">
              Data Scientist | ML Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              🎓 Master's @ Purdue University | 🌆 Based in Chicago Area
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Welcome to my digital journey through the world of AI and Data Science. 
            Let's explore together as we walk through my projects and experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="https://github.com/Hirak26"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                🔗 GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/hirak-modi-6a08181b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-purple-500/50 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                💼 LinkedIn
              </span>
            </a>
            <a
              href="mailto:hirak.modi2025@gmail.com"
              className="group px-8 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 text-blue-400 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-400/50 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                ✉️ Contact
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
            className="mt-16"
          >
            <p className="text-gray-400 text-sm mb-3 animate-pulse">Start your journey</p>
            <div className="animate-bounce">
              <svg
                className="w-8 h-8 mx-auto text-blue-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
