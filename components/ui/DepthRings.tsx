interface DepthRingsProps {
  size?: number | string;
  className?: string;
}

const RINGS = [
  { pct: 100, opacity: 0.06, delay: "0s" },
  { pct: 80,  opacity: 0.10, delay: "0.4s" },
  { pct: 62,  opacity: 0.18, delay: "0.8s" },
  { pct: 44,  opacity: 0.35, delay: "1.2s" },
  { pct: 28,  opacity: 0.65, delay: "1.6s" },
  { pct: 14,  opacity: 0.90, delay: "2.0s" },
];

const LINES = [0, 72, 144, 216, 288];

export default function DepthRings({ size = 320, className = "" }: DepthRingsProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {RINGS.map((r, i) => (
        <div
          key={i}
          className="depth-ring"
          style={{
            width: `${r.pct}%`,
            height: `${r.pct}%`,
            opacity: r.opacity,
            animationDelay: r.delay,
          }}
        />
      ))}
      {/* Core dot */}
      <div
        className="absolute rounded-full bg-gold"
        style={{
          width: 10, height: 10,
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 20px rgba(201,168,76,0.5)",
        }}
      />
      {/* Radial lines */}
      {LINES.map((deg, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: "50%", left: "50%",
            width: 1, height: "42%",
            background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.35))",
            transformOrigin: "top center",
            transform: `rotate(${deg}deg)`,
          }}
        />
      ))}
    </div>
  );
}
