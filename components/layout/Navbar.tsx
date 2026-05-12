"use client";
import { useState, useEffect } from "react";
import KMark from "@/components/ui/KMark";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "Process",  href: "#process"  },
  { label: "Contact",  href: "#contact"  },
];

const sectionIds = ["services", "work", "process", "about", "contact"];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState<string>("");

  // Background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      // Fire when the section occupies the upper-middle band of the viewport
      { threshold: 0, rootMargin: "-20% 0px -70% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* ─── DESKTOP NAV ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[60px]
          border-b backdrop-blur-md transition-colors duration-300
          ${scrolled ? "border-gold/20 bg-black/90" : "border-gold/10 bg-black/70"}`}
      >
        <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-[clamp(1.25rem,5vw,2.5rem)]">

          {/* Wordmark */}
          <a href="#home" className="flex items-center gap-2.5" aria-label="Kina Studio home">
            <KMark size="md" />
            <div className="flex flex-col">
              <span className="font-serif text-[15px] md:text-base text-parchment tracking-[4px] leading-none">KINA</span>
              <span className="block h-px w-full bg-gold/40 my-[3px]" />
              <span className="text-[10px] text-gold tracking-[5px]">STUDIO</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className={`nav-link text-xs md:text-sm tracking-[2px] transition-colors
                  ${activeSection === l.href
                    ? "text-gold nav-active"
                    : "text-muted hover:text-gold"}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("#contact")}
            className="hidden md:block text-xs font-medium tracking-[2px] px-6 py-2.5
              border border-gold text-gold rounded hover:bg-gold hover:text-black transition-all duration-200"
          >
            Start a project
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] w-7 py-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-px bg-parchment transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px bg-parchment transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-px bg-parchment transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ─── MOBILE MENU ─── */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8
          transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {links.map((l) => (
          <button
            key={l.label}
            onClick={() => scrollTo(l.href)}
            className={`font-serif text-[clamp(2rem,8vw,3rem)] tracking-widest transition-colors
              ${activeSection === l.href ? "text-gold" : "text-parchment hover:text-gold"}`}
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("#contact")}
          className="mt-4 text-sm font-medium tracking-[3px] px-8 py-3.5
            bg-gold text-black rounded hover:bg-gold/90 transition-colors"
        >
          Start a project
        </button>
        <span className="text-xs text-muted tracking-[3px] mt-2">
          hello@kinastudio.co.ke
        </span>
      </div>
    </>
  );
}
