"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top  = e.clientY + "px";
    };

    const expand = () => el.classList.add("expand");
    const shrink = () => el.classList.remove("expand");

    // Track every element we attach listeners to so we can clean them all up
    const tracked = new Set<Element>();

    const attachTo = (target: Element) => {
      if (tracked.has(target)) return;
      target.addEventListener("mouseenter", expand);
      target.addEventListener("mouseleave", shrink);
      tracked.add(target);
    };

    const attachAll = () => {
      document.querySelectorAll("a, button, .service-item, .p-item").forEach(attachTo);
    };

    attachAll();
    document.addEventListener("mousemove", move, { passive: true });

    // Pick up any interactive elements added after mount (e.g. form success state)
    const mutationObs = new MutationObserver(attachAll);
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      tracked.forEach((target) => {
        target.removeEventListener("mouseenter", expand);
        target.removeEventListener("mouseleave", shrink);
      });
      mutationObs.disconnect();
    };
  }, []);

  return <div ref={ref} className="custom-cursor" aria-hidden="true" />;
}
