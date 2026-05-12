import { Monitor, ShoppingBag, RefreshCw, Compass, ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const services = [
  {
    num: "01",
    Icon: Monitor,
    title: "Bespoke Web Development",
    desc: "Fast, intentional, mobile-first websites built to convert visitors into customers. No templates. No shortcuts.",
  },
  {
    num: "02",
    Icon: ShoppingBag,
    title: "High-Converting E-Commerce",
    desc: "Sell online without the headache. Beautiful storefronts built for your customers to buy from — and for you to easily manage.",
  },
  {
    num: "03",
    Icon: RefreshCw,
    title: "Digital Retainer & Growth",
    desc: "We don't disappear after launch. We act as your ongoing digital team — updating, managing, and scaling your presence.",
  },
  {
    num: "04",
    Icon: Compass,
    title: "Digital Strategy & Audits",
    desc: "Have a site that isn't working? We diagnose what's broken and give you an actionable, honest roadmap to fix it.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-parchment px-[clamp(1.25rem,5vw,2.5rem)] py-[clamp(5rem,12vw,9rem)]"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14 md:mb-20">
          <div className="max-w-[560px]">
            <div className="reveal"><SectionTag light>WHAT WE BUILD</SectionTag></div>
            <h2 className="reveal reveal-delay-1 font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-[#1A1208]">
              Services that go<br />beyond the surface.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 text-sm md:text-base font-light text-[#6B6050] leading-[1.85] max-w-[300px] md:text-right pb-1">
            A few things done exceptionally well — for businesses serious about their market.
          </p>
        </div>

        {/* Numbered rows */}
        <div className="border-t border-[#1A1208]/10">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i + 1} group border-b border-[#1A1208]/10
                py-8 md:py-12
                grid grid-cols-[64px_1fr] md:grid-cols-[120px_1fr_32px]
                gap-5 md:gap-10 items-start`}
            >
              {/* Oversized number — the anchor moment */}
              <span
                className="font-serif text-[3.5rem] md:text-[5rem] leading-none
                  text-gold/25 group-hover:text-gold/60
                  transition-colors duration-500 select-none"
              >
                {s.num}
              </span>

              {/* Content */}
              <div className="pt-1 md:pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <s.Icon
                    size={18}
                    strokeWidth={1.5}
                    className="text-gold-dim flex-shrink-0"
                  />
                  <h3
                    className="font-serif text-xl md:text-2xl lg:text-[1.75rem] leading-tight text-[#1A1208]
                      group-hover:text-gold-dim transition-colors duration-400"
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm md:text-[0.9375rem] font-light text-[#6B6050] leading-[1.9] max-w-[520px]">
                  {s.desc}
                </p>
              </div>

              {/* Arrow reveal */}
              <div
                className="hidden md:flex items-start justify-end pt-3
                  opacity-0 group-hover:opacity-100
                  translate-x-[-6px] group-hover:translate-x-0
                  transition-all duration-400"
              >
                <ArrowUpRight size={20} className="text-gold-dim" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
