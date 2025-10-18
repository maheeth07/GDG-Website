"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import team_members_core from "../content/team_members_core.json";
import { Github, Linkedin, Globe } from "lucide-react";
import Image from "next/image";

export default function Team() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const [scrollRange, setScrollRange] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateSizes = () => {
            const cardWidth = 300;
            const gap = 40;
            const totalCards = team_members_core.length;
            const totalWidth = totalCards * (cardWidth + gap);
            setScrollRange(Math.max(0, totalWidth - window.innerWidth + 80));
        };

        updateSizes();
        window.addEventListener("resize", updateSizes);
        return () => window.removeEventListener("resize", updateSizes);
    }, []);

    const xTransform: MotionValue<string> = useTransform(
        scrollYProgress,
        [0, 1],
        ["0px", scrollRange ? `-${scrollRange}px` : "0px"]
    );

    return (
        <main className="text-white">
            <section ref={sectionRef} className="relative h-[400vh] w-full">
                <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-x-hidden overflow-y-visible">
                    <h1 className="text-5xl font-extrabold text-yellow uppercase mb-6">
                        GDG Core Team 2025
                    </h1>
                    <p className="text-grey max-w-xl text-center mb-12">
                        Meet the amazing team that powers GDG VIIT — developers, designers,
                        and innovators all working together to make an impact.
                    </p>

                    <div className="relative w-full overflow-visible mt-2 pb-8" id="teams">
                        <motion.div
                            style={{ x: xTransform }}
                            className="flex gap-10 pl-[5vw] will-change-transform"
                        >
                            <div
                                className="flex gap-10"
                                style={{
                                    width: `${team_members_core.length * 340}px`,
                                }}
                            >
                                {team_members_core.map((member, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className={`rounded-2xl p-6 w-[300px] flex-shrink-0 flex flex-col items-center 
                                                   shadow-lg border transition-all hover:border-blue-600 
                                                    relative z-10
                                                   ${i === 0 ? "border-yellow scale-105 bg-neutral-800" : ""}`} // ✅ highlight first card
                                    >
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-600 mb-4">
                                            <Image
                                                src={member.img.trim()}
                                                alt={member.name}
                                                width={128}
                                                height={128}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <h2 className="text-xl font-bold text-yellow">{member.name}</h2>
                                            <p className="text-sm text-grey mt-1">{member.role}</p>
                                            <p className="text-xs text-pastel_green mt-1">{member.dept}</p>
                                        </div>

                                        <div className="flex gap-4 mt-4">
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noreferrer">
                                                    <Linkedin size={20} className="hover:text-yellow" />
                                                </a>
                                            )}
                                            {member.github && (
                                                <a href={member.github} target="_blank" rel="noreferrer">
                                                    <Github size={20} className="hover:text-yellow" />
                                                </a>
                                            )}
                                            {(member.leetcode || member.codechef || member.codeforces || member.showcase) && (
                                                <a
                                                    href={
                                                        member.leetcode || member.codechef || member.codeforces || member.showcase
                                                    }
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <Globe size={20} className="hover:text-yellow" />
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
