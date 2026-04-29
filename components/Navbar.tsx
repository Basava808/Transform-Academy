"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Programs", href: "#programs" },
    { label: "Accomplishments", href: "#accomplishments" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact Us", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 w-full z-50 bg-white border-b border-gray-200 px-6 py-6 flex justify-between items-center h-[80px]">
        {/* Replace text with a logo layout similar to image */}
        <div className="flex items-center space-x-3 lg:w-1/4">
          <img src="/images/logo.png" alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
          <div className="text-lg md:text-xl font-bold tracking-tighter text-black uppercase leading-none">
            Transform Tennis<br/><span className="text-[10px] md:text-xs tracking-widest text-gray-500 font-light">Academy</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-center space-x-10 flex-1">
          {menuItems.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs font-bold tracking-widest uppercase transition-colors ${
                item.label === 'Home' ? 'text-orange-500' : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language & Extra */}
        <div className="hidden lg:flex items-center justify-end space-x-4 lg:w-1/4 text-xs font-bold text-gray-600">
          <span>EN ∨</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-black transition-colors z-50"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white text-black z-40 flex flex-col items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center space-y-8 mt-16">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="text-2xl font-bold text-gray-600 hover:text-orange-500 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}