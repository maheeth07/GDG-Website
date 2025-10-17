"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center font-[Poppins]">
      {/* Logo */}
      <div className="flex items-center gap-4 ml-4">
        <Image
          src="/GDG Logo.svg"
          alt="GDG Logo"
          width={150}
          height={150}
          priority
        />
        <span className="text-xl md:text-2xl font-semibold text-white tracking-wide">
          
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-white font-medium tracking-wide ml-[100px]">
  <Link href="#about" className="hover:text-[#4285F4] transition-colors">
    About
  </Link>
  <Link href="#events" className="hover:text-[#EA4335] transition-colors">
    Events
  </Link>
  <Link href="#team" className="hover:text-[#34A853] transition-colors">
    Team
  </Link>
  <Link href="#contact" className="hover:text-[#FBBC05] transition-colors">
    Contact
  </Link>
</div>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 mr-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="w-6 h-[2px] bg-white transition-all duration-300"></span>
        <span className="w-6 h-[2px] bg-white transition-all duration-300"></span>
        <span className="w-6 h-[2px] bg-white transition-all duration-300"></span>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-5 gap-4 font-medium tracking-wide text-white bg-black/40 backdrop-blur-md rounded-md">
          <Link href="#about" className="hover:text-[#4285F4]" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#events" className="hover:text-[#EA4335]" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="#team" className="hover:text-[#34A853]" onClick={() => setIsOpen(false)}>Team</Link>
          <Link href="#contact" className="hover:text-[#FBBC05]" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
