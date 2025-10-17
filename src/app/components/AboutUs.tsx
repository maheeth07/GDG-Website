"use client";
import FallingParticles from "./FallingParticles";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen text-gray-200 px-8 py-20 flex items-center justify-center">
      {/* Background */}
      <FallingParticles />

      {/* Content Section */}
      <div className="z-10 max-w-4xl space-y-8 bg-black/30 backdrop-blur-sm p-10 rounded-2xl border border-gray-700">
        <h1 className="text-4xl font-semibold text-center mb-6">
          About GDG OnCampus VIIT
        </h1>

        <p className="text-gray-300 leading-relaxed text-justify">
          GDG OnCampus VIIT is a community of passionate developers,
          innovators, and learners driven by curiosity and the desire to build
          impactful solutions using technology. Our goal is to create a space
          where ideas grow through collaboration and creativity.
        </p>

        <p className="text-gray-300 leading-relaxed text-justify">
          We regularly conduct events, workshops, hackathons, and study jams
          that bring students together to explore emerging technologies such as
          Artificial Intelligence, Web and App Development, Cloud Computing, and
          more. Every event is carefully curated to provide practical
          hands-on experience alongside theoretical understanding.
        </p>

        <p className="text-gray-300 leading-relaxed text-justify">
          Our events are led by experienced mentors, industry speakers, and
          student leaders who guide participants through the latest tools and
          frameworks. Whether you’re a beginner or an experienced developer, GDG
          OnCampus ensures there’s always something new to learn, build, and
          share.
        </p>

        <p className="text-gray-300 leading-relaxed text-justify">
          Beyond technical knowledge, GDG OnCampus VIIT fosters teamwork,
          leadership, and problem-solving skills, helping students grow both
          professionally and personally. Together, we aim to cultivate a
          community that learns, builds, and innovates — one event at a time.
        </p>

     
      </div>
    </div>
  );
}