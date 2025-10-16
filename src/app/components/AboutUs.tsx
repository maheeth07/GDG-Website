"use client";
import { Card } from "@/app/components/ui/Card";
import { Linkedin, Github, Sparkles, Star, Zap } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface TeamMember {
  name: string;
  title: string;
  vibe: string;
  linkedin?: string;
  github?: string;
  color: "blue" | "red" | "yellow" | "green";
}

const teamMembers: TeamMember[] = [
  { name: "Sarah Johnson", title: "Lead Developer", vibe: "Code Queen 👑", linkedin: "https://linkedin.com/in/sarahjohnson", github: "https://github.com/sarahjohnson", color: "blue" },
  { name: "Michael Chen", title: "UX Designer", vibe: "Pixel Perfectionist ✨", linkedin: "https://linkedin.com/in/michaelchen", github: "https://github.com/michaelchen", color: "red" },
  { name: "Emily Rodriguez", title: "Backend Engineer", vibe: "API Whisperer 🚀", linkedin: "https://linkedin.com/in/emilyrodriguez", github: "https://github.com/emilyrodriguez", color: "yellow" },
  { name: "David Kim", title: "DevOps Specialist", vibe: "Cloud Commander ☁️", linkedin: "https://linkedin.com/in/davidkim", github: "https://github.com/davidkim", color: "green" },
  { name: "Jessica Williams", title: "Frontend Developer", vibe: "React Rockstar 🎸", linkedin: "https://linkedin.com/in/jessicawilliams", github: "https://github.com/jessicawilliams", color: "blue" },
  { name: "Alex Thompson", title: "Community Manager", vibe: "Vibe Curator 💫", linkedin: "https://linkedin.com/in/alexthompson", github: "https://github.com/alexthompson", color: "red" },
];

const colorClasses = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  green: "bg-green-500",
};

const glowClasses = {
  blue: "group-hover:shadow-[0_0_40px_rgba(66,133,244,0.6)]",
  red: "group-hover:shadow-[0_0_40px_rgba(234,67,53,0.6)]",
  yellow: "group-hover:shadow-[0_0_40px_rgba(251,188,4,0.6)]",
  green: "group-hover:shadow-[0_0_40px_rgba(52,168,83,0.6)]",
};

// -------------------- MemberCard --------------------
const MemberCard = ({ member }: { member: TeamMember }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-80 md:w-96"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className={`group relative overflow-hidden border-2 border-gray-200 transition-all duration-500 h-full ${glowClasses[member.color]}`}
        style={{
          transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="relative p-6">
          {/* Animated gradient overlay */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${member.color}/10 via-transparent to-${member.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" style={{ backgroundSize: "200% 100%" }} />

          {/* Top accent */}
          <div className={`absolute top-0 left-0 right-0 h-2 ${colorClasses[member.color]} transition-all duration-300 group-hover:h-3`} />

          {/* Sparkles */}
          <div className="absolute top-6 right-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <div className="absolute top-10 right-10 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: "0.2s" }}>
            <Sparkles className="w-3 h-3" />
          </div>

          {/* Avatar */}
          <div className="mb-6 flex justify-center relative">
            <div className={`absolute inset-0 rounded-full ${colorClasses[member.color]} blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500 scale-125 animate-pulse-glow`} />
            <div className={`relative w-28 h-28 rounded-full ${colorClasses[member.color]} flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform transition-all duration-500 group-hover:scale-110`}>
              {member.name.charAt(0)}
            </div>
          </div>

          {/* Info */}
          <div className="text-center mb-4 space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:scale-105 transition-transform duration-300">{member.name}</h3>
            <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">{member.title}</p>
            <p className="text-lg font-medium">
              <span className={`inline-block transform group-hover:scale-110 transition-transform duration-300 ${colorClasses[member.color]} text-white px-4 py-1 rounded-full`}>
                {member.vibe}
              </span>
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 mt-4">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-125">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 hover:bg-black hover:text-white transition-transform duration-300 transform hover:scale-125">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

// -------------------- AboutUs --------------------
export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  useEffect(() => {
    if (!containerRef.current) return;
    let frame: number;
    const speed = 0.5;

    const animate = () => {
      if (!containerRef.current) return;
      if (!isPaused) {
        containerRef.current.scrollLeft += speed;
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 3) containerRef.current.scrollLeft = 0;
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <div className="relative min-h-screen bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
            <span className="text-blue-500">Meet</span>{" "}
            <span className="text-red-500">The</span>{" "}
            <span className="text-yellow-400">Squad</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            The realest devs in the game 🔥 Building fire projects & spreading good vibes at GDG ✨
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div
            ref={containerRef}
            className="overflow-x-hidden whitespace-nowrap"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-6 flex-nowrap">
              {duplicatedMembers.map((member, i) => (
                <MemberCard key={`${member.name}-${i}`} member={member} />
              ))}
            </div>
          </div>
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        <div className="text-center text-sm text-gray-500 mb-8">
          <p className="font-medium">👆 Hover to pause • Scroll for vibes</p>
        </div>
      </div>
    </div>
  );
}
