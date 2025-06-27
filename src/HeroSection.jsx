import React from "react";
import { Sparkles } from "lucide-react";
import mypic from "../src/assets/Ankitpic1.png";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 bg-white"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 mb-8">
            <img
              src={mypic}
              alt="Ankit Kumar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Main Headings */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Hello,
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ankit Kumar
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          A passionate software developer who builds modern web apps, websites,
          and mobile applications that are fast, responsive, and user-friendly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Resume
            </span>
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
