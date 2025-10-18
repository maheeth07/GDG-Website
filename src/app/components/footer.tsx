"use client";

import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
  <footer className="w-full bg-gradient-to-t from-[#0b0b0b] to-[#151515] text-gray-300 py-6 border-t border-neutral-800 text-sm">
  <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
    {/* Logo / Title */}
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold text-yellow-400 tracking-widest uppercase hover:scale-105 transition-transform duration-300">
        GDG VIIT
      </h2>
      <p className="text-xs text-gray-400 mt-1">
        Google Developer Groups - VIIT | Empowering developers & innovators
      </p>
    </div>

    {/* Divider */}
    <div className="w-2/3 border-t border-neutral-700 my-2" />



    {/* Bottom Text */}
    <p className="text-[11px] text-gray-500 text-center mt-3">
      © {new Date().getFullYear()} GDG VIIT — Built with 💙 by the GDG Core Team 2025
    </p>
  </div>
</footer>

  );
}
