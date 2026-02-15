import { useEffect, useMemo, useRef, useState } from "react";

type Vec = { x: number; y: number };

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function dist(a: Vec, b: Vec) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

type Mode = "free" | "shape";

type Bird = {
  // position
  x: number;
  y: number;
  // velocity
  vx: number;
  vy: number;

  // fake 3D depth (0..1): nearer = bigger + brighter
  z: number;
  vz: number;

  // orientation
  angle: number;

  // wing animation
  flap: number;
  flapSpeed: number;

  // target (for shape mode)
  tx: number;
  ty: number;
  // how strongly it follows target
  follow: number;

  // visual
  size: number;
  hueShift: number;
};

function makeShapePoints(kind: "circle" | "spiral" | "wave" | "H", n: number, w: number, h: number): Vec[] {
  const pts: Vec[] = [];
  const cx = w * 0.5;
  const cy = h * 0.52;

  if (kind === "circle") {
    const r = Math.min(w, h) * 0.22;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2;
      pts.push({ x: cx + Math.cos(t) * r, y: cy + Math.sin(t) * r });
    }
  }

  if (kind === "spiral") {
    const turns = 2.7;
    const r0 = Math.min(w, h) * 0.03;
    const r1 = Math.min(w, h) * 0.24;
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1);
      const t = u * Math.PI * 2 * turns;
      const r = lerp(r0, r1, u);
      pts.push({ x: cx + Math.cos(t) * r, y: cy + Math.sin(t) * r });
    }
  }

  if (kind === "wave") {
    const left = w * 0.2;
    const right = w * 0.8;
    const amp = h * 0.09;
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1);
      const x = lerp(left, right, u);
      const y = cy + Math.sin(u * Math.PI * 4) * amp;
      pts.push({ x, y });
    }
  }

  if (kind === "H") {
    // Draw an H with 3 strokes: left vertical, right vertical, middle bar
    const top = h * 0.36;
    const bottom = h * 0.70;
    const leftX = w * 0.40;
    const rightX = w * 0.60;
    const midY = h * 0.53;

    const n1 = Math.floor(n * 0.4);
    const n2 = Math.floor(n * 0.4);
    const n3 = n - n1 - n2;

    for (let i = 0; i < n1; i++) {
      const u = i / Math.max(1, n1 - 1);
      pts.push({ x: leftX, y: lerp(top, bottom, u) });
    }
    for (let i = 0; i < n2; i++) {
      const u = i / Math.max(1, n2 - 1);
      pts.push({ x: rightX, y: lerp(top, bottom, u) });
    }
    for (let i = 0; i < n3; i++) {
      const u = i / Math.max(1, n3 - 1);
      pts.push({ x: lerp(leftX, rightX, u), y: midY });
    }
  }

  return pts;
}

function drawOrigamiBird(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  angle: number,
  flap: number,
  shade: number
) {
  // Bird is a stylized "paper" shape: body + two wings (triangles)
  // flap affects wing spread

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  const s = size;
  const wing = s * (0.9 + flap * 0.35);
  const body = s * 0.75;

  // soft shadow for "pop out"
  ctx.globalAlpha = 0.18 * shade;
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.ellipse(0, s * 0.48, s * 0.75, s * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();

  // paper shading
  ctx.globalAlpha = 0.95;
  const g = ctx.createLinearGradient(-s, -s, s, s);
  g.addColorStop(0, `rgba(255,255,255,${0.92 * shade})`);
  g.addColorStop(1, `rgba(160,190,255,${0.35 * shade})`);

  // left wing
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-wing, -s * 0.28);
  ctx.lineTo(-body * 0.18, s * 0.12);
  ctx.closePath();
  ctx.fill();

  // right wing
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(wing, -s * 0.28);
  ctx.lineTo(body * 0.18, s * 0.12);
  ctx.closePath();
  ctx.fill();

  // body (small triangle)
  ctx.fillStyle = `rgba(255,255,255,${0.82 * shade})`;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, body * 0.6);
  ctx.lineTo(body * 0.22, body * 0.18);
  ctx.closePath();
  ctx.fill();

  // fold line
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = `rgba(255,255,255,${0.45 * shade})`;
  ctx.lineWidth = Math.max(1, s * 0.06);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, body * 0.55);
  ctx.stroke();

  ctx.restore();
}

export default function PaperBirdsHero({
  title = "HIRAK MODI",
  subtitle = "Software / Data • Webflow-style portfolio with cinematic motion",
}: {
  title?: string;
  subtitle?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [ready, setReady] = useState(false);
  const mouse = useRef({ x: 0, y: 0, vx: 0, vy: 0 });

  const birds = useRef<Bird[]>([]);
  const mode = useRef<Mode>("free");
  const shapeKind = useRef<"circle" | "spiral" | "wave" | "H">("circle");

  const config = useMemo(() => {
    return {
      count: 120, // raise to 180+ if your GPU can handle
      drift: 0.35,
      maxSpeed: 2.2,
      cohesion: 0.0024,
      separation: 0.018,
      alignment: 0.006,
      mouseRepel: 0.06,
      shapePull: 0.045,
      shapeDamping: 0.86,
      freeDamping: 0.92,
      edgeForce: 0.04,
    };
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      const prevX = mouse.current.x;
      const prevY = mouse.current.y;
      mouse.current.x = nx;
      mouse.current.y = ny;
      mouse.current.vx = nx - prevX;
      mouse.current.vy = ny - prevY;
    };

    wrap.addEventListener("pointermove", onMove, { passive: true });
    return () => wrap.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    const c = canvasRef.current;
    const wrap = wrapRef.current;
    if (!c || !wrap) return;

    const ctx = c.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.min(2, window.devicePixelRatio || 1);

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      w = Math.max(1, Math.floor(r.width));
      h = Math.max(1, Math.floor(r.height));
      dpr = Math.min(2, window.devicePixelRatio || 1);

      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // init birds once
      if (birds.current.length === 0) {
        const arr: Bird[] = [];
        for (let i = 0; i < config.count; i++) {
          const z = Math.random(); // 0..1
          arr.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 1.6,
            vy: (Math.random() - 0.5) * 1.6,
            z,
            vz: (Math.random() - 0.5) * 0.002,
            angle: Math.random() * Math.PI * 2,
            flap: Math.random() * 1,
            flapSpeed: 0.06 + Math.random() * 0.06,
            tx: w * 0.5,
            ty: h * 0.5,
            follow: 0.65 + Math.random() * 0.3,
            size: lerp(6, 16, z),
            hueShift: Math.random() * 1,
          });
        }
        birds.current = arr;
        setReady(true);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Mode switching: free -> shape -> free ...
    const sequence = [
      { m: "free" as const, ms: 5200 },
      { m: "shape" as const, ms: 4800, kind: "circle" as const },
      { m: "free" as const, ms: 4200 },
      { m: "shape" as const, ms: 5200, kind: "spiral" as const },
      { m: "free" as const, ms: 4200 },
      { m: "shape" as const, ms: 5200, kind: "H" as const },
      { m: "free" as const, ms: 4200 },
      { m: "shape" as const, ms: 5200, kind: "wave" as const },
    ];

    let seqIndex = 0;
    let seqTimer: number | null = null;

    const advance = () => {
      const item = sequence[seqIndex % sequence.length];
      mode.current = item.m;
      if (item.m === "shape" && item.kind) shapeKind.current = item.kind;
      seqIndex++;

      if (seqTimer) window.clearTimeout(seqTimer);
      seqTimer = window.setTimeout(advance, item.ms);
    };

    advance();

    // animation loop
    let raf = 0;
    let t0 = performance.now();

    const tick = (t: number) => {
      const dt = clamp((t - t0) / 16.6667, 0.5, 2.0);
      t0 = t;

      // background
      ctx.clearRect(0, 0, w, h);

      // subtle grid overlay (Webflow vibe)
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.lineWidth = 1;
      const step = 56;
      for (let x = 0; x <= w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
        ctx.stroke();
      }
      ctx.restore();

      // assign targets if shape
      let targets: Vec[] | null = null;
      if (mode.current === "shape") {
        targets = makeShapePoints(shapeKind.current, birds.current.length, w, h);
      }

      // update flock
      const arr = birds.current;

      // simple boids neighborhood
      const neighDist = 70;
      const sepDist = 28;

      for (let i = 0; i < arr.length; i++) {
        const b = arr[i];

        // “pop out” depth motion
        b.z = clamp(b.z + b.vz * dt, 0, 1);
        if (b.z === 0 || b.z === 1) b.vz *= -1;

        const speedLimit = config.maxSpeed * lerp(0.7, 1.2, b.z);

        let ax = 0;
        let ay = 0;

        // mouse repel (normalized mouse coords)
        const mx = mouse.current.x * w;
        const my = mouse.current.y * h;
        const dm = dist({ x: b.x, y: b.y }, { x: mx, y: my });
        if (dm < 140) {
          const f = (1 - dm / 140) * config.mouseRepel;
          ax += ((b.x - mx) / (dm + 0.001)) * f;
          ay += ((b.y - my) / (dm + 0.001)) * f;
        }

        // edge keep-in
        const margin = 80;
        if (b.x < margin) ax += config.edgeForce * (1 - b.x / margin);
        if (b.x > w - margin) ax -= config.edgeForce * (1 - (w - b.x) / margin);
        if (b.y < margin) ay += config.edgeForce * (1 - b.y / margin);
        if (b.y > h - margin) ay -= config.edgeForce * (1 - (h - b.y) / margin);

        // boids: cohesion/alignment/separation
        let cx = 0,
          cy = 0,
          avx = 0,
          avy = 0,
          sx = 0,
          sy = 0,
          count = 0;

        for (let j = 0; j < arr.length; j++) {
          if (i === j) continue;
          const o = arr[j];
          const d = Math.hypot(b.x - o.x, b.y - o.y);
          if (d < neighDist) {
            cx += o.x;
            cy += o.y;
            avx += o.vx;
            avy += o.vy;
            count++;

            if (d < sepDist) {
              sx += (b.x - o.x) / (d + 0.001);
              sy += (b.y - o.y) / (d + 0.001);
            }
          }
        }

        if (count > 0 && mode.current === "free") {
          // cohesion
          cx /= count;
          cy /= count;
          ax += (cx - b.x) * config.cohesion;

          // alignment
          avx /= count;
          avy /= count;
          ax += (avx - b.vx) * config.alignment;
          ay += (avy - b.vy) * config.alignment;

          // separation
          ax += sx * config.separation;
          ay += sy * config.separation;

          // gentle drift to keep flow going
          ax += (Math.sin(t * 0.0004 + i) * 0.002) * config.drift;
          ay += (Math.cos(t * 0.00035 + i) * 0.002) * config.drift;
        }

        // shape mode pulls each bird to a target point
        if (mode.current === "shape" && targets) {
          const target = targets[i % targets.length];
          b.tx = target.x;
          b.ty = target.y;

          ax += (b.tx - b.x) * (config.shapePull * b.follow);
          ay += (b.ty - b.y) * (config.shapePull * b.follow);
        }

        // integrate
        b.vx += ax * dt;
        b.vy += ay * dt;

        // damping depends on mode
        const damp = mode.current === "shape" ? config.shapeDamping : config.freeDamping;
        b.vx *= damp;
        b.vy *= damp;

        // cap speed
        const sp = Math.hypot(b.vx, b.vy);
        if (sp > speedLimit) {
          b.vx = (b.vx / sp) * speedLimit;
          b.vy = (b.vy / sp) * speedLimit;
        }

        b.x += b.vx * dt;
        b.y += b.vy * dt;

        // wrap softly
        if (b.x < -40) b.x = w + 40;
        if (b.x > w + 40) b.x = -40;
        if (b.y < -40) b.y = h + 40;
        if (b.y > h + 40) b.y = -40;

        // orientation towards velocity
        b.angle = Math.atan2(b.vy, b.vx);

        // flap
        b.flap += b.flapSpeed * dt;
      }

      // draw far -> near for depth
      const sorted = [...arr].sort((a, b) => a.z - b.z);

      for (const b of sorted) {
        const shade = lerp(0.55, 1.0, b.z);
        const s = b.size * lerp(0.85, 1.6, b.z);

        // “pop out” illusion
        const par = lerp(0.3, 1.1, b.z);
        const px = b.x + (mouse.current.vx * 220) * par;
        const py = b.y + (mouse.current.vy * 220) * par;

        // subtle blur for far birds
        // (cheap blur: draw smaller + lower alpha)
        ctx.globalAlpha = lerp(0.55, 0.95, b.z);

        const flap = Math.sin(b.flap) * 0.5 + 0.5;
        drawOrigamiBird(ctx, px, py, s, b.angle, flap, shade);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (seqTimer) window.clearTimeout(seqTimer);
      cancelAnimationFrame(raf);
    };
  }, [config]);

  return (
    <section ref={wrapRef} className="relative min-h-screen overflow-hidden">
      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Readability overlay (Webflow vibe) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            Webflow-style motion • Origami birds hero {ready ? "• live" : ""}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {title}
          </h1>

          <p className="mt-4 text-base text-white/80 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur hover:bg-white/10"
            >
              About
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur hover:bg-white/10"
            >
              Contact
            </a>
          </div>

          <p className="mt-6 text-xs text-white/55">
            Tip: move your mouse — birds parallax & “pop out”. Every few seconds they form a new shape.
          </p>
        </div>
      </div>
    </section>
  );
}
