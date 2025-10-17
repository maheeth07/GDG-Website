"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Particles from "@tsparticles/react";

export default function Home() {
  // Floating doodle animation (randomized per doodle)
  const getFloatVariants = (delay = 0) => ({
    float: {
      y: [
        `${-10 + Math.random() * 10}px`,
        `${-20 + Math.random() * 20}px`,
        `${0}px`,
        `${10 + Math.random() * 10}px`,
        `${-10 + Math.random() * 10}px`,
      ],
      x: [
        `${-10 + Math.random() * 10}px`,
        `${10 + Math.random() * 10}px`,
        `${0}px`,
        `${-10 + Math.random() * 10}px`,
        `${10 + Math.random() * 10}px`,
      ],
      transition: {
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      },
    },
  });

  // GDG letters animation
  const letters = [
    { char: "G", color: "#EA4335" },
    { char: "D", color: "#FBBC05" },
    { char: "G", color: "#4285F4" },
  ];
  const linePositions = [-80, 0, 80];
  const controls = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      while (true) {
        await controls.start((i) => ({
          x: linePositions[i],
          y: 0,
          rotate: 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        }));

        await controls.start((i) => ({
          x: 100 * Math.cos((i * 2 * Math.PI) / 3),
          y: 100 * Math.sin((i * 2 * Math.PI) / 3),
          rotate: 360,
          transition: { duration: 4, ease: "easeInOut" },
        }));

        await controls.start((i) => ({
          x: linePositions[i],
          y: 0,
          rotate: 0,
          transition: { duration: 1.5, ease: "easeInOut" },
        }));
      }
    };
    animateSequence();
  }, [controls]);

  const leftDoodles = [
     { src: "/doodles/doodl11.svg", top: "20%", left: "0%", rotate: "0deg" },
    // { src: "/doodles/doodl10.svg", top: "0%", left: "50%", rotate: "0deg" },
    { src: "/doodles/doodl1.svg", top: "15%", left: "15%", rotate: "-15deg" },
    { src: "/doodles/doodl2.svg", top: "35%", left: "10%", rotate: "10deg" },
    { src: "/doodles/doodl7.svg", top: "60%", left: "0%", rotate: "-5deg" },
    // { src: "/doodles/doodl8.svg", top: "55%", left: "15%", rotate: "20deg" },
    { src: "/doodles/doodl9.svg", top: "75%", left: "15%", rotate: "40deg" },
  ];

  const rightDoodles = [
    { src: "/doodles/doodl4.svg", top: "15%", right: "5%", rotate: "20deg" },
    { src: "/doodles/doodl6.svg", top: "40%", right: "10%", rotate: "-15deg" },
    { src: "/doodles/doodl3.svg", top: "65%", right: "0%", rotate: "10deg" },
    { src: "/doodles/doodl8.svg", top: "60%", right: "15%", rotate: "-20deg" },
  ];

  return (
    <main
      className="pt-[50px] min-h-screen flex flex-col items-center justify-start relative overflow-hidden px-6 md:px-12"
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🌟 Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: { events: { onHover: false, onClick: false, resize: true } },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"] },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: { min: 3, max: 6 } },
            move: {
              enable: true,
              speed: 2,
              direction: "bottom",
              straight: false,
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Left Doodles */}
      {leftDoodles.map((doodle, idx) => (
        <motion.div
          key={idx}
          variants={getFloatVariants(Math.random() * 2)}
          animate="float"
          className="absolute w-20 h-20 md:w-32 md:h-32 z-20"
          style={{
            top: doodle.top,
            left: doodle.left,
            rotate: doodle.rotate,
          }}
        >
          <Image src={doodle.src} alt={`Left Doodle ${idx + 1}`} fill className="object-contain" />
        </motion.div>
      ))}

      {/* Right Doodles */}
      {rightDoodles.map((doodle, idx) => (
        <motion.div
          key={idx}
          variants={getFloatVariants(Math.random() * 2)}
          animate="float"
          className="absolute w-20 h-20 md:w-32 md:h-32 z-20"
          style={{
            top: doodle.top,
            right: doodle.right,
            rotate: doodle.rotate,
          }}
        >
          <Image src={doodle.src} alt={`Right Doodle ${idx + 1}`} fill className="object-contain" />
        </motion.div>
      ))}

      {/* Hero Section */}
      <div className="text-center z-30 max-w-4xl pt-8 md:pt-14">
        {/* Animated GDG */}
        <div className="relative w-80 h-48 mx-auto mb-4">
          {letters.map((l, i) => (
            <motion.div
              key={i}
              custom={i}
              animate={controls}
              className="w-20 h-28 rounded-2xl flex justify-center items-center text-white text-5xl font-bold shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: l.color, zIndex: 10 - i }}
              whileHover={{ scale: 1.1 }}
            >
              {l.char}
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white drop-shadow-lg">
          <span>OnCampus VIIT</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-lg">
          Bringing together developers, designers, and tech enthusiasts under one vibrant community at VIIT.
        </p>

        {/* Join Button */}
        <motion.a
          href="#join"
          whileHover={{
            scale: 1.07,
            y: -4,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
          }}
          whileTap={{
            scale: 0.95,
            y: 0,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
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
