"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Floating animation for icons
const floatVariants = {
  float: {
    y: ["0px", "-8px", "0px", "8px", "0px"], // up and down
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

// Social links with colored icons
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/gdgc_viit",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gdg-oncampus-viit",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "Gmail",
    href: "mailto:dscviit@gmail.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
    email: "dscviit@gmail.com",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
];

export default function ContactUs() {
  const [hoveredEmail, setHoveredEmail] = useState(false);

  const heading = "Let's Keep in Touch. Shall We?";
  const wordColors = ["#DB4437", "#F4B400", "#4285F4", "#0F9D58", "#EA4335", "#34A853"];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start relative px-4 bg-[#FFF8E7]">
      {/* Heading */}
      <div className="text-center z-10 max-w-4xl pt-12 md:pt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight whitespace-nowrap flex justify-center flex-wrap">
          {heading.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mr-2"
              style={{ color: wordColors[idx % wordColors.length] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">
          Reach out to us on our social platforms or send us a mail — we'd love to hear from you!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center gap-10 mt-12 z-10 relative">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 w-24 relative"
            variants={floatVariants} // Floating animation
            animate="float"
            whileHover={{ y: -10, scale: 1.15 }} // Hover effect
            onMouseEnter={() => link.email && setHoveredEmail(true)}
            onMouseLeave={() => link.email && setHoveredEmail(false)}
          >
            <img
              src={link.icon}
              alt={link.name}
              className="w-16 h-16 object-contain"
              style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))" }}
            />
            <span className="text-[#2E2E2E] font-medium">{link.name}</span>

            {/* Email Tooltip */}
            {link.email && hoveredEmail && (
              <div className="absolute top-20 bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                {link.email}
              </div>
            )}
          </motion.a>
        ))}
      </div>
    </main>
  );
}
