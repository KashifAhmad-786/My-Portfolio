// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "React Portfolio",
    description: "A personal portfolio website built with React and Vite, featuring smooth animations and responsive design.",
    tech: ["React", "Vite", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Landing Page",
    description: "A modern, animated landing page for a SaaS product, optimized for conversions.",
    tech: ["React", "Framer Motion", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products, orders, and analytics, with charts and authentication.",
    tech: ["React", "Chart.js", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, user authentication, and a modern editor.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "React Platform",
    description: "A full-featured blog platform with markdown support, user authentication, and a modern editor.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
   {
    title: "Vite Platform",
    description: "A full-featured blog platform with markdown support, user authentication, and a modern editor.",
    tech: ["Vite", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

const techFilters = ["All", ...Array.from(new Set(projects.flatMap(p => p.tech)))];

const Projects = () => {
  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.tech.includes(filter));
  return (
    <section id="projects" className="py-16 px-4 md:px-10 bg-gradient-to-br  min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">Featured Projects</h2>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-100 cursor-pointer">
        {techFilters.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-full font-medium border transition-all duration-300 shadow-sm ${filter === t ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white' : 'bg-white text-gray-700 hover:bg-blue-100 cursor-pointer'}`}
          >
            {t}
          </button>
        ))}
      </div>
      {/* Project Cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((proj, i) => (
          <li
            key={proj.title}
            className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 animate-fade-in-up"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {proj.title}
            </h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map(tech => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors font-medium shadow group-hover:scale-105"
              >
                GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-blue-100 hover:bg-purple-500 hover:text-white transition-colors font-medium shadow group-hover:scale-105"
              >
                Demo
              </a>
            </div>
          </li>
        ))}
      </ul>
      {/* Animations */}
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
