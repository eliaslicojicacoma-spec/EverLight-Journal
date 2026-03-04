export default function EverLightBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* “Aurora” blobs */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-24 -left-24 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-80 -right-24 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "0 0, 0 0",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_75%,rgba(0,0,0,0.92)_100%)]" />
    </div>
  );
}
