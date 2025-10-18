"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "GDG Inaugural Event 2025",
    date: "October 18, 2025",
    time: "10:00 AM - 1:20 PM",
    location: "Viswashvaraya Hall(Seminar Hall 1)",
    image: "/events/event1.jpeg",
    status: "active",
    span: "row-span-2"
  },
  {
    id: 2,
    title: "Google Cloud Study Jam",
    date: "october 4, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Viswashvaraya Hall(Seminar Hall 1)",
    image: "/events/event2.jpeg",
    status: "active",
    span: "row-span-2 lg:col-span-2"
  },
  {
    id: 3,
    title: "Coming Soon",
    image: "/events/event1.jpeg",
    status: "upcoming",
    span: "row-span-2"
  },
  {
    id: 4,
    title: "Coming Soon",
    image: "/events/event2.jpeg",
    status: "upcoming",
    span: "row-span-1"
  },
  {
    id: 5,
    title: "Coming Soon",
    image: "/events/event1.jpeg",
    status: "upcoming",
    span: "row-span-1"
  },
  {
    id: 6,
    title: "Coming Soon",
    image: "/events/event2.jpeg",
    status: "upcoming",
    span: "row-span-1"
  },
  {
    id: 7,
    title: "Coming Soon",
    image: "/events/event1.jpeg",
    status: "upcoming",
    span: "row-span-1"
  }
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col items-center justify-center overflow-hidden min-h-screen"
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" id="events"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 px-4"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4 sm:mb-6 leading-tight">
          Wanna Explore Our Events?
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#4285F4] to-[#0F9D58] text-white font-semibold shadow-lg text-sm sm:text-base"
        >
          Yes
        </motion.button>
      </motion.div>

      {/* Responsive Grid Layout */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Mobile: Single column stack */}
        <div className="grid grid-cols-1 sm:hidden gap-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden shadow-lg h-64"
              style={{
                border: "3px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  event.status === "upcoming"
                    ? "blur-[2px] brightness-75"
                    : "active:scale-105"
                }`}
              />

              {event.status === "active" ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-200 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-semibold text-lg tracking-wide">
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2 column grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-xl overflow-hidden shadow-lg ${
                event.id === 2 ? "col-span-2 h-80" : "h-64"
              }`}
              style={{
                border: "3px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  event.status === "upcoming"
                    ? "blur-[2px] brightness-75"
                    : "group-hover:scale-110"
                }`}
              />

              {event.status === "active" ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-200 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {event.location}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-semibold text-lg tracking-wide">
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop: Masonry grid */}
        <div className="hidden lg:grid grid-cols-4 auto-rows-[200px] gap-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-xl overflow-hidden shadow-lg ${event.span}`}
              style={{
                border: "3px solid rgba(255,255,255,0.15)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  event.status === "upcoming"
                    ? "blur-[2px] brightness-75"
                    : "group-hover:scale-110"
                }`}
              />

              {event.status === "active" ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-200 space-y-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {event.location}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white font-semibold text-lg tracking-wide">
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}