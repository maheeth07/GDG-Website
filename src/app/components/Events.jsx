"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Calendar, Clock, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const events = [
	{
		id: 1,
		title: "GDG Inaugural Event 2025",
		date: "October 18, 2025",
		time: "10:00 AM - 1:20 PM",
		location: "Viswashvaraya Hall(Seminar Hall 1)",
		image: "/events/event1.jpeg",
		status: "active",
	},
	{
		id: 2,
		title: "Google Cloud Study Jam",
		date: "October 4, 2025",
		time: "10:00 AM - 4:00 PM",
		location: "Viswashvaraya Hall(Seminar Hall 1)",
		image: "/events/event2.jpeg",
		status: "active",
	}
];

function calculateGap(width) {
	const minWidth = 768;
	const maxWidth = 1200;
	const minGap = 80;
	const maxGap = 120;
	if (width <= minWidth) return minGap;
	if (width >= maxWidth) return maxGap;
	return (
		minGap +
		(maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
	);
}

export default function Events() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [hoverPrev, setHoverPrev] = useState(false);
	const [hoverNext, setHoverNext] = useState(false);
	const [containerWidth, setContainerWidth] = useState(1200);

	const imageContainerRef = useRef(null);
	const autoplayIntervalRef = useRef(null);

	const eventsLength = useMemo(() => events.length, []);
	const activeEvent = useMemo(() => events[activeIndex], [activeIndex]);

	useEffect(() => {
		function handleResize() {
			if (imageContainerRef.current) {
				setContainerWidth(imageContainerRef.current.offsetWidth);
			}
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		autoplayIntervalRef.current = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % eventsLength);
		}, 5000);
		return () => {
			if (autoplayIntervalRef.current)
				clearInterval(autoplayIntervalRef.current);
		};
	}, [eventsLength]);

	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
		};
		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex, eventsLength]);

	const handleNext = useCallback(() => {
		setActiveIndex((prev) => (prev + 1) % eventsLength);
		if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
	}, [eventsLength]);

	const handlePrev = useCallback(() => {
		setActiveIndex((prev) => (prev - 1 + eventsLength) % eventsLength);
		if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
	}, [eventsLength]);

	function getImageStyle(index) {
		const gap = calculateGap(containerWidth);
		const maxStickUp = gap * 0.6;
		const isActive = index === activeIndex;
		const isLeft = (activeIndex - 1 + eventsLength) % eventsLength === index;
		const isRight = (activeIndex + 1) % eventsLength === index;

		if (isActive) {
			return {
				zIndex: 3,
				opacity: 1,
				pointerEvents: "auto",
				transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
				transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
			};
		}
		if (isLeft) {
			return {
				zIndex: 2,
				opacity: 0.7,
				pointerEvents: "auto",
				transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
				transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
			};
		}
		if (isRight) {
			return {
				zIndex: 2,
				opacity: 0.7,
				pointerEvents: "auto",
				transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
				transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
			};
		}
		return {
			zIndex: 1,
			opacity: 0,
			pointerEvents: "none",
			transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
		};
	}

	const contentVariants = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
	};

	return (
		<section
			id="events"
			className="relative w-full min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center overflow-hidden"
			style={{
				backgroundImage: "url('/bg.jpeg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="absolute inset-0 bg-black/40 z-0"></div>

			<motion.div
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="relative z-10 text-center mb-16 px-4"
			>
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-6 leading-tight">
					Wanna Explore Our Events?
				</h2>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4285F4] to-[#0F9D58] text-white font-semibold shadow-xl hover:shadow-2xl transition-all"
				>
					Yes, Show Me!
				</motion.button>
			</motion.div>

			<div className="relative z-10 w-full max-w-6xl">
				<div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
					{/* Circular Card Display */}
					<div className="w-full md:order-1">
						<div
							ref={imageContainerRef}
							className="relative w-full h-[400px] md:h-[500px]"
							style={{ perspective: "1000px" }}
						>
							{events.map((event, index) => (
								<div
									key={event.id}
									className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
									style={getImageStyle(index)}
								>
									<Image
										src={event.image}
										alt={event.title}
										fill
										className="object-cover"
										priority={index === 0}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
									<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
										<h3 className="text-2xl font-bold mb-2">
											{event.title}
										</h3>
										<div className="text-sm space-y-1 opacity-90">
											<div className="flex items-center gap-2">
												<Calendar className="w-4 h-4" />
												<span>{event.date}</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Event Details */}
					<div className="w-full md:order-2">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex}
								variants={contentVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: 0.4, ease: "easeInOut" }}
								className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
							>
								<h3 className="text-3xl font-bold text-white mb-4">
									{activeEvent.title}
								</h3>

								<div className="space-y-4 text-white/90 text-lg mb-6">
									<div className="flex items-start gap-3">
										<Calendar className="w-6 h-6 flex-shrink-0 mt-1" />
										<div>
											<div className="font-semibold">Date</div>
											<div>{activeEvent.date}</div>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<Clock className="w-6 h-6 flex-shrink-0 mt-1" />
										<div>
											<div className="font-semibold">Time</div>
											<div>{activeEvent.time}</div>
										</div>
									</div>

									<div className="flex items-start gap-3">
										<MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
										<div>
											<div className="font-semibold">Location</div>
											<div>{activeEvent.location}</div>
										</div>
									</div>
								</div>

								<div className="flex gap-4 pt-4">
									<button
										onClick={handlePrev}
										onMouseEnter={() => setHoverPrev(true)}
										onMouseLeave={() => setHoverPrev(false)}
										className="w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg"
										style={{
											backgroundColor: hoverPrev ? "#ffffff" : "#1f2937",
										}}
										aria-label="Previous event"
									>
										<ArrowLeft
											size={24}
											color={hoverPrev ? "#1f2937" : "#ffffff"}
										/>
									</button>

									<button
										onClick={handleNext}
										onMouseEnter={() => setHoverNext(true)}
										onMouseLeave={() => setHoverNext(false)}
										className="w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg"
										style={{
											backgroundColor: hoverNext ? "#ffffff" : "#1f2937",
										}}
										aria-label="Next event"
									>
										<ArrowRight
											size={24}
											color={hoverNext ? "#1f2937" : "#ffffff"}
										/>
									</button>
								</div>

								<div className="flex gap-2 mt-6">
									{events.map((_, idx) => (
										<button
											key={idx}
											onClick={() => {
												setActiveIndex(idx);
												if (autoplayIntervalRef.current)
													clearInterval(autoplayIntervalRef.current);
											}}
											className="h-2 rounded-full transition-all"
											style={{
												width: idx === activeIndex ? "32px" : "8px",
												backgroundColor:
													idx === activeIndex
														? "#ffffff"
														: "rgba(255,255,255,0.4)",
											}}
											aria-label={`Go to event ${idx + 1}`}
										/>
									))}
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}