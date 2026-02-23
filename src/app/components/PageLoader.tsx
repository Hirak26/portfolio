import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Progress animation + auto-hide
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 350);
          return 100;
        }
        return next;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  // Lock scroll ONLY while loader is visible
  useEffect(() => {
    if (!visible) return;

    const prevOverflow = document.body.style.overflow;
    const prevHeight = document.body.style.height;

    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.overflow = prevOverflow || "auto";
      document.body.style.height = prevHeight || "auto";
    };
  }, [visible]);

  // Extra safety unlock (in case any crash prevents cleanup)
  useEffect(() => {
    const t = setTimeout(() => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Soft glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-white/10 blur-[120px]" />

      {/* Loader card */}
      <div className="relative w-[440px] max-w-[92vw] rounded-2xl border border-white/10 bg-black/60 p-6">
        <div className="text-center">
          <div className="text-[11px] tracking-[0.35em] text-white/60">
            INITIALIZING PORTFOLIO
          </div>

          <div className="mt-2 text-3xl font-bold">HIRAK MODI</div>

          <div className="mt-2 text-sm text-white/60">
            Software Engineering • AI Systems
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-white/80 transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-4 text-center text-xl font-semibold tabular-nums">
          {progress}%
        </div>

        {/* Terminal */}
        <div className="mt-6 rounded-xl border border-white/10 bg-black/50 p-4 font-mono text-xs text-white/75">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-2 text-white/50">terminal</span>
          </div>

          <div>&gt; npm install</div>
          <div>&gt; vite build</div>
          <div>&gt; compiling modules...</div>
          <div>&gt; loading AI runtime...</div>
          <div>&gt; hydrating UI...</div>
        </div>

        <div className="mt-4 text-center text-xs text-white/50">
          build • load • hydrate
        </div>
      </div>
    </div>
  );
}