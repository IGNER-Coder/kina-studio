"use client";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import Image from "next/image";

const projects = [
  {
    badge: "E-COMMERCE",
    title: "Bubasneakers",
    desc: "Street-Luxe sneaker platform",
    services: ["Next.js 14", "E-Commerce", "UI Design"],
    image: "/Bubasneakers.png",
    href: "https://bubasneakers.vercel.app",
  },
  {
    badge: "PORTFOLIO SITE",
    title: "Freshia Portfolio",
    desc: "Contemporary art portfolio",
    services: ["Next.js", "TypeScript", "Motion Design"],
    image: "/Freshia portfolio.png",
    href: "https://freshia-portfolio.vercel.app",
  },
  {
    badge: "WEB APPLICATION",
    title: "Nexus Brief",
    desc: "Personalised news dashboard",
    services: ["Next.js 14", "Postgres", "Full-Stack"],
    image: "/Bubasneakers.png",
    href: "https://nexus-brief.vercel.app",
  },
];

function ProjectCard({
  project,
  className = "",
  priority = false,
}: {
  project: (typeof projects)[0];
  className?: string;
  priority?: boolean;
}) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${project.title}`}
      className={`p-item relative overflow-hidden cursor-pointer block group ${className}`}
    >
      {/* Image */}
      <div className="p-visual w-full h-full relative bg-surface2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
          className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-500"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </div>

      {/* Hover overlay */}
      <div className="p-overlay">
        <div className="inline-block text-[9px] tracking-[2px] text-gold uppercase border border-gold/30 px-2 py-0.5 rounded-sm mb-2">
          {project.badge}
        </div>
        <h4 className="font-serif text-[17px] md:text-xl text-parchment mb-1">{project.title}</h4>
        <p className="text-sm text-muted font-light mb-3">{project.desc}</p>

        {/* Services tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.services.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[1px] text-parchment/60 border border-parchment/15 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-gold text-xs font-medium tracking-[1px]">
          <span>View Project</span>
          <ArrowUpRight size={12} strokeWidth={2} />
        </div>
      </div>

      {/* Top-right arrow */}
      <div className="p-arrow absolute top-4 right-4 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold">
        <ArrowUpRight size={15} strokeWidth={1.5} />
      </div>
    </a>
  );
}

export default function Portfolio() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="work" className="bg-black px-[clamp(1.25rem,5vw,2.5rem)] py-[clamp(5rem,12vw,9rem)]">
      <div className="max-w-7xl mx-auto w-full">

        {/* Display header */}
        <div className="mb-12 md:mb-16">
          <div className="reveal"><SectionTag>OUR WORK</SectionTag></div>
          <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4 mt-4">
            <h2 className="font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-parchment">
              Selected<br /><em className="text-gold">Work.</em>
            </h2>
            <p className="text-base font-light text-muted max-w-65 md:text-right leading-relaxed pb-2 md:pb-4">
              Every project starts with understanding your business. Design comes second.
            </p>
          </div>
          {/* Gold gradient rule */}
          <div className="reveal reveal-delay-2 mt-8 h-px bg-linear-to-r from-gold/50 via-gold/20 to-transparent" />
        </div>

        {/* Project grid */}
        <div className="reveal grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-px bg-border rounded-xl overflow-hidden mb-6">
          <ProjectCard
            project={projects[0]}
            className="md:row-span-2 min-h-80 md:min-h-100"
            priority
          />
          {[1, 2].map((idx) => (
            <ProjectCard key={idx} project={projects[idx]} className="min-h-47.5" />
          ))}
        </div>

        {/* Inquire CTA */}
        <div className="reveal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-border rounded-xl">
          <div>
            <p className="font-serif text-[1.1rem] text-parchment">Have a project in mind?</p>
            <p className="text-sm text-muted mt-1">Currently accepting 2 new clients for Q3.</p>
          </div>
          <button
            onClick={scrollToContact}
            className="btn-primary bg-gold text-black text-sm font-medium tracking-[2px]
              px-7 py-3 rounded hover:bg-gold/90 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Inquire now →
          </button>
        </div>

      </div>
    </section>
  );
}
