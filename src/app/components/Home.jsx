"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Floating animation
const floatVariants = {
  float: {
    y: ["0px", "-15px", "0px", "15px", "0px"],
    x: ["0px", "10px", "0px", "-10px", "0px"],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const leftDoodles = [
  { src: "/doodles/doodl11.svg", top: "0%", left: "20%", rotate: "0deg" },
  { src: "/doodles/doodl10.svg", top: "0%", left: "50%", rotate: "0deg" },
  { src: "/doodles/doodl1.svg", top: "10%", left: "5%", rotate: "-15deg" },
  { src: "/doodles/doodl2.svg", top: "35%", left: "10%", rotate: "10deg" },
  { src: "/doodles/doodl7.svg", top: "60%", left: "0%", rotate: "-5deg" },
  { src: "/doodles/doodl8.svg", top: "55%", left: "15%", rotate: "20deg" },
  { src: "/doodles/doodl9.svg", top: "55%", left: "30%", rotate: "40deg" }, // moved up beside 3rd
];

const rightDoodles = [
  { src: "/doodles/doodl4.svg", top: "15%", right: "5%", rotate: "20deg" },
  { src: "/doodles/doodl6.svg", top: "40%", right: "10%", rotate: "-15deg" },
  { src: "/doodles/doodl3.svg", top: "65%", right: "0%", rotate: "10deg" },
  
  { src: "/doodles/doodl8.svg", top: "60%", right: "15%", rotate: "-20deg" },
];


  return (
    <main
       className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden px-6 md:px-12"
  style={{
    backgroundImage: "url('bg.jpeg')", // your background image path
    backgroundSize: "cover",       // make sure it covers the entire section
    backgroundPosition: "center",  // center it
    backgroundRepeat: "no-repeat", // prevent tiling
  }}
    >
      {/* Left Doodles */}
      {leftDoodles.map((doodle, idx) => (
        <motion.div
          key={idx}
          variants={floatVariants}
          animate="float"
          className="absolute w-20 h-20 md:w-32 md:h-32"
          style={{
            top: doodle.top,
            left: doodle.left,
            rotate: doodle.rotate,
          }}
        >
          <Image
            src={doodle.src}
            alt={`Left Doodle ${idx + 1}`}
            fill
            className="object-contain"
          />
        </motion.div>
      ))}

      {/* Right Doodles */}
      {rightDoodles.map((doodle, idx) => (
        <motion.div
          key={idx}
          variants={floatVariants}
          animate="float"
          className="absolute w-20 h-20 md:w-32 md:h-32"
          style={{
            top: doodle.top,
            right: doodle.right,
            rotate: doodle.rotate,
          }}
        >
          <Image
            src={doodle.src}
            alt={`Right Doodle ${idx + 1}`}
            fill
            className="object-contain"
          />
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl pt-2 md:pt-5">
        <motion.div className="text-center z-10 max-w-4xl pt-24 md:pt-32">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            {["G", "D", "G"].map((letter, idx) => (
            <motion.span
                key={idx}
                style={{ color: ["#DB4437", "#F4B400", "#4285F4"][idx], display: "inline-block" }}
                whileHover={{ scale: 1.3, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
                {letter}
            </motion.span>
            ))}{" "}
            <motion.span
            style={{ color: "#0F9D58", display: "inline-block" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
            OnCampus VIIT
            </motion.span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">
            Bringing together developers, designers, and tech enthusiasts under one vibrant community at VIIT.
        </p>
        </motion.div>

        <motion.a
            href="#join"
            whileHover={{ 
                scale: 1.07,        // slightly bigger
                y: -4,               // lift up a little
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" // stronger shadow
            }}
            whileTap={{ 
                scale: 0.95, 
                y: 0, 
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" // pressed shadow
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="mt-8 inline-block bg-gradient-to-r from-[#4285F4] to-[#0F9D58] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all"
            >
            Join Us
            </motion.a>
      </div>
    </main>
  );
}
