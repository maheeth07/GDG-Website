"use client";
import { motion } from "framer-motion";
import FallingParticles from "./FallingParticles";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen text-gray-100 px-8 py-24 flex flex-col items-center">
      {/* Background */}
   

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 max-w-4xl"
      >
        <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
          About GDG OnCampus VIIT
        </h1>
        <p className="text-lg text-gray-300">
          A community fostering innovation, collaboration, and technical growth.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="mt-16 space-y-12 max-w-4xl w-full">
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-semibold text-gray-100">Developer Community</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            GDG OnCampus VIIT brings together learners and innovators to collaborate, learn, and create meaningful projects.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-semibold text-gray-100">Events</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            We organize workshops, hackathons, and sessions guided by mentors to provide practical learning experiences.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-semibold text-gray-100">Innovation</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            We promote creativity, teamwork, and a culture of continuous learning to build the next generation of tech innovators.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-semibold text-gray-100">Mentorship</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Experienced mentors guide members through learning paths, coding practices, and real-world projects to ensure continuous growth.
          </p>
        </motion.div>

        {/* Section 5 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-semibold text-gray-100">Community Impact</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            Our activities aim to create a positive impact in the tech community by sharing knowledge, hosting events, and inspiring innovation among students.
          </p>
        </motion.div>
      </div>

   
    </div>
  );
}