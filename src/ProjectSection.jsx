import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

import Project_1 from "../src/assets/todoist.png";
import Project_2 from "../src/assets/trafficIssue.png";
import Project_3 from "../src/assets/Homorax.png";
import Project_4 from "../src/assets/LinkedinClone.png";
import Project_5 from "../src/assets/Shopnetic.jpeg";
import Project_6 from "../src/assets/portfolio-7.png";
import Project_7 from "../src/assets/StopWatch2.jpg";
import Project_8 from "../src/assets/ChargeGrid.jpg";

const projects = [
  {
    title: "Todoist Clone",
    description: "A productivity app to manage your tasks efficiently.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: Project_1,
    github: "https://github.com/Ankit1141192/todoistConstructWeak",
    deploy: "https://bright-cendol-1e0307.netlify.app",
    category: "web",
  },
  {
    title: "TraffIssue",
    description: "A platform for citizens to report traffic problems.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: Project_2,
    github: "https://github.com/Sadafff19/Team_4347_hackathon",
    deploy: "https://4347-hackthon.netlify.app",
    category: "web",
  },
  {
    title: "LinkedIn Clone",
    description: "A social networking app inspired by LinkedIn.",
    tech: ["HTML", "JavaScript", "CSS", "LocalStorage"],
    image: Project_4,
    github: "https://github.com/Ankit1141192/cunstructWeakProject",
    category: "web",
  },
  {
    title: "Stayver",
    description: "A hotel booking platform with a user-friendly interface.",
    tech: ["React+Vite", "TailwindCSS", "ClerkAuth"],
    image: Project_6,
    github: "https://github.com/Ankit1141192/QuickStay",
    deploy: "https://stayver.vercel.app/",
    category: "web",
  },
  {
    title: "Homorax",
    description: "An ecommerce platform for modern shopping experiences.",
    tech: ["React", "CSS", "ChakraUI", "Firebase Authentication"],
    image: Project_3,
    github: "https://github.com/Ankit1141192/The-Coding-Crusaders",
    category: "web",
  },
  {
    title: "Shopnetic",
    description: "A mobile-friendly online store with advanced features.",
    tech: ["React Native", "JavaScript", "Expo", "FirebaseAuth", "AsyncStorage"],
    image: Project_5,
    github: "https://github.com/Ankit1141192/ReactNativeProject",
    category: "mobile",
  },
  {
    title: "StopWatch",
    description: "A simple stopwatch app built with React Native.",
    tech: ["React Native", "JavaScript", "Expo", "AsyncStorage"],
    image: Project_7,
    github: "https://github.com/Ankit1141192/StopWatch-Timer-App",
    category: "mobile",
  },
  {
    title: "ChargeGrid",
    description:
      "ChargeGrid is a React Native CLI mobile application built to help electric vehicle (EV) and find distance between two point",
    tech: ["React Native", "JavaScript", "AsyncStorage", "CLI", "Map"],
    image: Project_8,
    github: "https://github.com/Ankit1141192/ChargeGrid",
    category: "mobile",
  },
];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const sectionRef = useRef(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCategory]);

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A curated collection of my professional projects demonstrating practical problem-solving and technical expertise.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-400 p-2 rounded-2xl">
            {["all", "web", "mobile"].map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-xl font-medium mr-2 transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all"
                  ? "All Projects"
                  : category === "web"
                  ? "Web Projects"
                  : "Mobile Apps"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-400 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group transform hover:scale-105 shadow-md"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.deploy && (
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-6 h-6 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-500 transition-colors duration-300 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-500/10 text-cyan-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 text-gray-500 hover:text-cyan-500 transition-colors duration-300" />
                    </a>
                    {project.deploy && (
                      <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-gray-500 hover:text-cyan-500 transition-colors duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
