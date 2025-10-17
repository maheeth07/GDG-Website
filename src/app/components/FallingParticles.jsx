"use client";
import { useEffect, useRef } from "react";

export default function FallingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#00BFFF", "#00FF7F", "#FF4500", "#FFD700"]; // blue, green, red, yellow
    const particles = [];

    class Particle {
      constructor(x, y, radius, color, speedY, speedX) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedY = speedY;
        this.speedX = speedX;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(Date.now() * 0.001 + this.y * 0.01) * this.speedX;

        if (this.y - this.radius > canvas.height) {
          this.y = -this.radius;
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      }
    }

    function initParticles() {
      for (let i = 0; i < 180; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.8 + 0.8; // slightly larger than last version
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speedY = Math.random() * 0.4 + 0.15; // still smooth and slow
        const speedX = Math.random() * 0.3 + 0.1;
        particles.push(new Particle(x, y, radius, color, speedY, speedX));
      }
    }

    function animate() {
      // Slightly lighter dark background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0d1117"); // deep gray top
      gradient.addColorStop(1, "#1a1f27"); // lighter dark bottom
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => p.update());
      requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
}
