"use client";

import { useEffect, useState } from "react";

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
        // Viewport center triggers changes
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0,
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

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 w-full">
      <div className="max-w-7xl mx-auto flex justify-center gap-0 overflow-x-auto px-6 py-2 no-scrollbar">
        {links.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`uppercase text-xs font-bold tracking-widest whitespace-nowrap px-4 py-3 transition-colors ${
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