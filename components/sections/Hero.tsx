"use client";
import { useEffect, useRef } from "react";
import DepthRings from "@/components/ui/DepthRings";

const floatingStats = [
  { value: "100%",    label: "ON-TIME DELIVERY", pos: "top-[22%] right-[4%]",  float: "float-card"   },
  { value: "3–4 Wk", label: "TURNAROUND",        pos: "top-[48%] right-[20%]", float: "float-card-2" },
  { value: "Nairobi",label: "BASED HERE",         pos: "top-[70%] right-[5%]",  float: "float-card"   },
];

// Scattered gold dot constellation — mirrors KMark dots at room scale
const DOTS = [
  { x: "62%", y: "12%", r: 3.5, o: 0.25 },
  { x: "71%", y: "28%", r: 2,   o: 0.18 },
  { x: "58%", y: "42%", r: 1.5, o: 0.12 },
  { x: "80%", y: "19%", r: 2.5, o: 0.20 },
  { x: "75%", y: "55%", r: 1.5, o: 0.10 },
  { x: "66%", y: "68%", r: 3,   o: 0.22 },
  { x: "85%", y: "72%", r: 2,   o: 0.15 },
  { x: "54%", y: "80%", r: 1.5, o: 0.08 },
  { x: "90%", y: "40%", r: 2,   o: 0.14 },
  { x: "77%", y: "85%", r: 1,   o: 0.10 },
];

export default function Hero() {
  const ringsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  // Parallax: rings drift up at 12% scroll speed, reinforcing the depth metaphor
  useEffect(() => {
    const handleScroll = () => {
      if (ringsRef.current) {
        ringsRef.current.style.transform =
          `translate(-50%, calc(-50% + ${window.scrollY * 0.12}px))`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[100svh] relative flex flex-col justify-end overflow-hidden"
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/30 rounded-full blur-[80px]" />

        {/* Gold dot constellation */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          {DOTS.map((d, i) => (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={d.r}
              fill="#C9A84C"
              opacity={d.o}
            />
          ))}
        </svg>

        {/* Depth Rings with parallax ref */}
        <div
          ref={ringsRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 mix-blend-screen md:opacity-60"
        >
          <DepthRings size="max(150vw, 150vh)" />
        </div>

        {/* Floating stat cards — desktop only */}
        <div className="absolute inset-0 max-w-7xl mx-auto w-full pointer-events-none">
          {floatingStats.map((stat) => (
            <div
              key={stat.label}
              className={`hidden md:block ${stat.float} absolute ${stat.pos}
                bg-black/50 backdrop-blur-md border border-gold/20 rounded-xl px-6 py-5`}
            >
              <div className="font-serif text-[28px] text-gold leading-none">{stat.value}</div>
              <div className="text-[10px] text-parchment/70 tracking-[2px] mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-[clamp(1.25rem,5vw,2.5rem)] pb-16 pt-[clamp(140px,22vh,260px)] flex-1 flex flex-col justify-start">
        <div className="max-w-[660px]">

          {/* Location eyebrow */}
          <p
            className="text-[10px] md:text-xs tracking-[6px] text-gold/80 uppercase mb-6
              opacity-0 animate-[fadeUp_0.7s_cubic-bezier(0.16,1,0.3,1)_0.15s_forwards]"
          >
            Nairobi &nbsp;·&nbsp; Africa
          </p>

          {/* Two-line headline: Outfit Light + Playfair Display */}
          <h1
            className="mb-[clamp(1.5rem,3vw,2.25rem)]
              opacity-0 animate-[fadeUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]"
          >
            <span className="block font-sans font-light text-[clamp(1.6rem,3.5vw,2.75rem)] text-parchment/70 leading-tight tracking-tight mb-2">
              We go deep.
            </span>
            <span className="block font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] text-parchment">
              You grow <em className="text-gold">high.</em>
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-sm md:text-base font-light text-parchment/60 leading-[1.9] max-w-[420px]
              mb-[clamp(2rem,4vw,3rem)]
              opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards]"
          >
            Premium web design and branding for African startups and corporates — built to convert, crafted to last.
          </p>

          {/* Dual CTAs */}
          <div
            className="flex items-center gap-4 flex-wrap
              opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards]"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary bg-gold text-black text-sm font-medium tracking-[2px]
                px-8 py-3.5 rounded hover:bg-gold/90 transition-colors shadow-lg"
            >
              Start a project
            </button>
            <button
              onClick={() => scrollTo("#work")}
              className="group flex items-center gap-2.5 text-sm text-parchment/70 tracking-[2px]
                border border-parchment/20 hover:border-gold/50 hover:text-gold
                px-8 py-3.5 rounded transition-all duration-300"
            >
              See our work
            </button>
          </div>

          {/* Mobile stats strip */}
          <div className="flex md:hidden items-center gap-6 mt-10 pt-8 border-t border-white/10
            opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
            {floatingStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-xl text-gold leading-none mb-1">{stat.value}</div>
                <div className="text-[9px] text-parchment/60 tracking-[2px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
