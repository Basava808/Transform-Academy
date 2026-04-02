"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const links = [
  { id: "about", label: "Environment" },
  { id: "philosophy", label: "Methodology" },
  { id: "programs", label: "Programs" },
  { id: "accomplishments", label: "Accomplishments" },
  { id: "facilities", label: "Facilities" },
  { id: "contact", label: "Contact Us" },
];

export default function Anchors() {
  const [active, setActive] = useState<string>("about");
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Auto-scroll the active tab into view on mobile
  useEffect(() => {
    const activeTab = tabRefs.current[active];
    if (activeTab && scrollRef.current) {
      const container = scrollRef.current;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const containerWidth = container.offsetWidth;
      // Center the active tab in the scrollable area
      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  useEffect(() => {
    const sections = links.map(link =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // Tighter margins for mobile viewports
        rootMargin: "-10% 0px -30% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 w-full">
      <div
        ref={scrollRef}
        className="max-w-7xl mx-auto flex lg:justify-center gap-0 overflow-x-auto px-2 md:px-6 py-2 no-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {links.map(link => (
          <a
            key={link.id}
            ref={(el) => { tabRefs.current[link.id] = el; }}
            href={`#${link.id}`}
            onClick={(e) => handleClick(e, link.id)}
            className={`uppercase text-[10px] md:text-xs font-bold tracking-widest whitespace-nowrap px-3 md:px-4 py-3 transition-colors flex-shrink-0 ${
              active === link.id
                ? "bg-black text-white"
                : "text-gray-800 hover:text-black hover:bg-gray-100 bg-transparent"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}