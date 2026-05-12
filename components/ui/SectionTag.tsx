interface SectionTagProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionTag({ children, light = false }: SectionTagProps) {
  return (
    <div className={`flex items-center gap-3 text-[9px] tracking-[4px] mb-4 ${light ? "text-gold-dim" : "text-gold"}`}>
      <span className={`w-5 h-px flex-shrink-0 ${light ? "bg-gold-dim" : "bg-gold"}`} />
      {children}
    </div>
  );
}
