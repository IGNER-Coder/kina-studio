import { MessageCircle, LayoutTemplate, Code2, Rocket } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";

const steps = [
  {
    num: "01",
    Icon: MessageCircle,
    title: "We listen first",
    desc: "A real conversation about your business, your customers, and what you actually need — before anything else.",
  },
  {
    num: "02",
    Icon: LayoutTemplate,
    title: "We plan together",
    desc: "Clear scope, honest timeline, and a shared structure. No surprises. You approve every direction before we move.",
  },
  {
    num: "03",
    Icon: Code2,
    title: "We build with care",
    desc: "Design and development with intention. You see real progress at every step, not just at the end.",
  },
  {
    num: "04",
    Icon: Rocket,
    title: "We launch and stay",
    desc: "We don't disappear after go-live. We support, maintain, and grow with your business long term.",
  },
];

const stats = [
  { label: "Average delivery", value: "3–4 weeks" },
  { label: "Revisions included", value: "Unlimited" },
  { label: "Post-launch support", value: "Always on" },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-surface px-[clamp(1.25rem,5vw,2.5rem)] py-[clamp(4rem,10vw,7rem)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section header */}
        <div className="text-center mb-[clamp(3rem,8vw,5rem)] reveal">
          <SectionTag>HOW WE WORK</SectionTag>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-parchment mt-4">
            Deep process.<br /><em className="text-gold">Real results.</em>
          </h2>
        </div>

        {/* Numbered editorial steps */}
        <div className="divide-y divide-gold/10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group
                grid grid-cols-[72px_1fr] md:grid-cols-[160px_1fr]
                gap-6 md:gap-14 py-10 md:py-14`}
            >
              {/* Oversized number — typographic anchor */}
              <div
                className="font-serif leading-none select-none self-start
                  text-[5rem] md:text-[8.5rem]
                  text-gold/15 group-hover:text-gold/30
                  transition-colors duration-700 pt-1"
              >
                {step.num}
              </div>

              {/* Step content */}
              <div className="pt-2 md:pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full border border-gold/25 flex items-center justify-center flex-shrink-0
                      group-hover:border-gold/60 transition-colors duration-500"
                  >
                    <step.Icon size={14} className="text-gold" />
                  </div>
                  <h4
                    className="font-serif text-xl md:text-2xl lg:text-[1.65rem] leading-tight text-parchment
                      group-hover:text-gold/90 transition-colors duration-500"
                  >
                    {step.title}
                  </h4>
                </div>
                <p className="text-sm md:text-[0.9375rem] font-light text-gray leading-[1.9] max-w-[480px] ml-11">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="reveal mt-14 md:mt-20 grid grid-cols-3 gap-px bg-gold/10 rounded-xl overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-4 md:px-8 py-7 md:py-9 text-center">
              <div className="font-serif text-[clamp(1.2rem,2.5vw,1.75rem)] text-parchment mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-[11px] tracking-[2px] uppercase text-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
