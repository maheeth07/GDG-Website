"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#F1EFEA]/95 backdrop-blur-md border-b border-black/20 font-[Poppins] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center gap-4">
  <Image 
    src="/GDG Logo.svg" 
    alt="GDG Logo" 
    width={150}   // ⬅️ increased from 36 → 48
    height={150}  // ⬅️ increased from 36 → 48
    priority     // ⬅️ optional: ensures fast load for main logo
  />
  <span className="text-2xl font-semibold tracking-tight text-[#111111]">
    
  </span>
</div>


        {/* Desktop Menu */}
        <div className="hidden md:flex ml-[-40px] gap-8 text-[#1C1C1C] font-medium tracking-wide">
          <Link
            href="#about"
            className="hover:text-[#4285F4] transition-all duration-300 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="#events"
            className="hover:text-[#EA4335] transition-all duration-300 hover:underline underline-offset-4"
          >
            Events
          </Link>
          <Link
            href="#team"
            className="hover:text-[#34A853] transition-all duration-300 hover:underline underline-offset-4"
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#FBBC05] transition-all duration-300 hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-[#1C1C1C]"></span>
          <span className="w-6 h-[2px] bg-[#1C1C1C]"></span>
          <span className="w-6 h-[2px] bg-[#1C1C1C]"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#F1EFEA] border-t border-black/20 py-5 gap-4 font-medium tracking-wide text-[#1C1C1C]">
          <Link
            href="#about"
            className="hover:text-[#4285F4] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#events"
            className="hover:text-[#EA4335] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            href="#team"
            className="hover:text-[#34A853] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#FBBC05] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
