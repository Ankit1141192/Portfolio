import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React.js", level: 86, icon: <FaReact size={24} color="#61DBFB" /> },
  { name: "JavaScript", level: 88, icon: <FaJs size={24} color="#F7DF1E" /> },
  {
    name: "React Native",
    level: 85,
    icon: <TbBrandReactNative size={24} color="#61DBFB" />,
  },
  {
    name: "HTML5/CSS3",
    level: 92,
    icon: (
      <div className="flex items-center gap-1">
        <FaHtml5 size={20} color="#E44D26" />
        <FaCss3Alt size={20} color="#1572B6" />
      </div>
    ),
  },
  { name: "Firebase", level: 85, icon: <SiFirebase size={24} color="#FFCA28" /> },
  { name: "UI/UX Design", level: 85, icon: <FaFigma size={24} color="#A259FF" /> },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-6 bg-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-300 shadow hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-gray-700">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">
                {skill.level}% Proficiency
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
