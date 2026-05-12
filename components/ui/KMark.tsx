"use client";

interface KMarkProps {
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { box: "w-7 h-7", text: "text-lg", dots: [
    { size: "w-[4px] h-[4px]", pos: "top-[5px] right-[5px]", opacity: "opacity-100" },
    { size: "w-[2.5px] h-[2.5px]", pos: "top-[11px] right-[7px]", opacity: "opacity-70" },
  ]},
  md: { box: "w-[34px] h-[34px]", text: "text-[22px]", dots: [
    { size: "w-[5px] h-[5px]", pos: "top-[6px] right-[6px]", opacity: "opacity-100" },
    { size: "w-[3px] h-[3px]", pos: "top-[13px] right-[9px]", opacity: "opacity-70" },
    { size: "w-[2px] h-[2px]", pos: "top-[19px] right-[11px]", opacity: "opacity-40" },
  ]},
  lg: { box: "w-12 h-12", text: "text-3xl", dots: [
    { size: "w-[6px] h-[6px]", pos: "top-[8px] right-[8px]", opacity: "opacity-100" },
    { size: "w-[4px] h-[4px]", pos: "top-[16px] right-[11px]", opacity: "opacity-70" },
    { size: "w-[2.5px] h-[2.5px]", pos: "top-[23px] right-[14px]", opacity: "opacity-40" },
  ]},
};

export default function KMark({ size = "md" }: KMarkProps) {
  const s = sizes[size];
  return (
    <div
      className={`${s.box} bg-surface border border-gold rounded-[7px] flex items-center justify-center relative flex-shrink-0 hover:bg-gold/10 transition-colors`}
    >
      <span className={`font-serif ${s.text} text-parchment leading-none`}>K</span>
      {s.dots.map((d, i) => (
        <div
          key={i}
          className={`absolute ${d.size} ${d.pos} ${d.opacity} rounded-full bg-gold`}
        />
      ))}
    </div>
  );
}
