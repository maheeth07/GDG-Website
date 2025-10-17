"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com/gdgoncampusviit", icon: Instagram, color: "#E4405F" },
  { name: "LinkedIn", href: "https://linkedin.com/company/gdgoncampusviit", icon: Linkedin, color: "#0A66C2" },
  { name: "GitHub", href: "https://github.com/gdgoncampusviit", icon: Github, color: "#FFFFFF" },
  { name: "Email", href: "mailto:gdgoncampus@viit.ac.in", icon: Mail, color: "#F4B400" },
];

export default function ContactUs() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start relative px-4">
      {/* Heading */}
      <div className="text-center z-10 max-w-4xl pt-12 md:pt-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">Connect</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">
            With Us
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed md:leading-loose max-w-2xl mx-auto">
          Join our vibrant community of developers, designers, and tech enthusiasts. Stay connected and never miss an update!
        </p>
      </div>

      {/* Social Cards */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-16 mt-12 z-10 relative">
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          const isHovered = hoveredIcon === link.name;

          // Use white for GitHub hover glow
          const hoverColor = link.name === "GitHub" ? "#FFFFFF" : link.color;

          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center gap-3 w-24 transition-all duration-300"
              animate={{ y: ["0px", "-8px", "0px", "8px", "0px"] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.15 }}
              onMouseEnter={() => setHoveredIcon(link.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {/* Glow Effect */}
              {isHovered && (
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-60"
                  style={{ backgroundColor: hoverColor }}
                />
              )}

              {/* Icon Card */}
              <div
                className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-all duration-300 bg-white/20 backdrop-blur-sm border border-gray-300/30"
                style={{
                  transform: isHovered ? "translateY(-12px) rotate(5deg)" : "translateY(0) rotate(0deg)",
                  boxShadow: isHovered ? `0 20px 40px ${hoverColor}40` : "none",
                  color: isHovered ? hoverColor : "#111",
                }}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300" />
              </div>

              {/* Name */}
              <span
                className="relative z-10 text-sm font-medium transition-all duration-300"
                style={{ color: isHovered ? hoverColor : "#444" }}
              >
                {link.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    </main>
  );
}
