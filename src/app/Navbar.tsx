"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95vw] max-w-3xl z-[100] rounded-full bg-[#181818]/90 border border-[#23201c]/60 backdrop-blur-lg shadow-2xl flex items-center px-6 py-3 transition-all duration-300"
      style={{ fontFamily: "'Domine', serif" }}
    >
      {/* Brand */}
      <a href="#home" className="flex items-center gap-2 font-bold text-xl text-[#e8d8c3] tracking-tight">
        <Heart className="w-6 h-6 text-[#bfae9c]" />
        Dr. Serena Blake
      </a>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-7 items-center ml-auto">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[#e8d8c3] hover:text-[#bfae9c] font-medium transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center p-2 text-[#e8d8c3] ml-auto"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className="w-6 h-6 block relative">
          <span className={`absolute left-0 top-1 w-6 h-0.5 bg-[#e8d8c3] transition-all ${open ? 'rotate-45 top-3' : ''}`}></span>
          <span className={`absolute left-0 top-3 w-6 h-0.5 bg-[#e8d8c3] transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`absolute left-0 top-5 w-6 h-0.5 bg-[#e8d8c3] transition-all ${open ? '-rotate-45 top-3' : ''}`}></span>
        </span>
      </button>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#181818]/95 border-b border-[#23201c]/60 px-4 pb-4 pt-2 flex flex-col gap-4 rounded-b-2xl shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#e8d8c3] hover:text-[#bfae9c] font-medium text-lg transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
} 