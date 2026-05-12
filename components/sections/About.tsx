import { Lightbulb, Target, Handshake } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import DepthRings from "@/components/ui/DepthRings";

const reasons = [
  {
    Icon: Lightbulb,
    title: "Strategy before design",
    desc: "We spend time understanding your business, your market, and your customers before a single screen is designed. That clarity is what makes the work perform.",
  },
  {
    Icon: Target,
    title: "Built to perform",
    desc: "Every layout decision, every line of copy, every interaction is intentional. Beautiful and effective — not a trade-off.",
  },
  {
    Icon: Handshake,
    title: "We stay after launch",
    desc: "A website is not a handover — it is the beginning of a relationship. We support, maintain, and grow with our clients long term.",
  },
];

const stats = [
  { value: "Nairobi", label: "Our home base" },
  { value: "3–4 wk",  label: "Average delivery" },
  { value: "100%",    label: "On-time record" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-parchment relative overflow-hidden px-[clamp(1.25rem,5vw,2.5rem)] py-[clamp(4rem,10vw,8rem)]"
    >
      {/* DepthRings — faint background motif, ties to hero and contact */}
      <div
        className="absolute top-1/2 right-[-8%] -translate-y-1/2 opacity-[0.06] pointer-events-none select-none"
        aria-hidden="true"
      >
        <DepthRings size={580} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Tag */}
        <div className="reveal mb-6">
          <SectionTag light>WHO WE ARE</SectionTag>
        </div>

        {/* Manifesto — the anchor moment */}
        <h2
          className="reveal reveal-delay-1 font-serif leading-[1.05] text-[#1A1208] mb-12 md:mb-16
            text-[clamp(2.5rem,6vw,4.75rem)] max-w-[720px]"
        >
          We build the digital<br />
          foundations African<br />
          <em className="text-gold-dim">brands deserve.</em>
        </h2>

        {/* Gold rule */}
        <div className="reveal reveal-delay-2 mb-12 md:mb-16 h-px bg-linear-to-r from-[#1A1208]/20 via-[#1A1208]/8 to-transparent" />

        {/* Two-column: mission copy + value reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(3rem,6vw,5rem)] items-start mb-14 md:mb-20">

          {/* Left — mission */}
          <div className="reveal reveal-delay-2">
            <p className="text-base md:text-lg font-light text-[#4A3F30] leading-[1.9] mb-5">
              Kina Studio is a focused creative team in Nairobi. We keep our client roster small by design — not because we can't take on more, but because every project deserves our complete attention.
            </p>
            <p className="text-sm font-light text-[#6B6050] leading-[1.9]">
              We work closely with founders, marketers, and business owners who know that a great digital presence is a business asset — not just a brochure.
            </p>
          </div>

          {/* Right — value reasons */}
          <div className="flex flex-col gap-7">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className={`reveal reveal-delay-${i + 3} flex items-start gap-4 group`}
              >
                <div
                  className="w-9 h-9 rounded-full border border-gold-dim/30 bg-white/60 flex items-center justify-center flex-shrink-0 mt-0.5
                    group-hover:border-gold-dim transition-colors duration-300"
                >
                  <r.Icon size={15} strokeWidth={1.5} className="text-gold-dim" />
                </div>
                <div>
                  <h4 className="font-serif text-[1rem] text-[#1A1208] mb-1">{r.title}</h4>
                  <p className="text-sm font-light text-[#6B6050] leading-[1.8]">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="reveal reveal-delay-4 grid grid-cols-3 gap-8 pt-8 border-t border-[#1A1208]/10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-[clamp(1.4rem,2.8vw,2.25rem)] text-[#1A1208] leading-none mb-2">
                {s.value}
              </div>
              <div className="text-[10px] tracking-[2px] uppercase text-[#6B6050]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
