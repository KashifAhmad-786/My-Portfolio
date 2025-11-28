// src/components/ProjectDetail.jsx
import React from 'react';

import { useNavigate } from 'react-router-dom';


// Professional, company-style project detail page
const ProjectDetail = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-4xl w-full bg-white/90 dark:bg-blue-900/80 backdrop-blur-lg rounded-3xl shadow-2xl px-0 py-0 flex flex-col md:flex-row items-stretch border border-gray-200 dark:border-gray-700 animate-fade-in-up mt-24 mb-12 overflow-hidden">
        {/* Left: Project image */}
        <div className="md:w-1/2 flex items-start justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-l-3xl">
          <img src="/assets/About.jpg" alt="React Portfolio Screenshot" className="w-full max-w-xs rounded-2xl shadow object-cover" style={{minHeight:180 }}
           />
        </div>
        {/* Right: Details */}
        <div className="md:w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-left">React Developer</h1>
          <div className="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-4 text-left">Personal Portfolio Website / 2025</div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 text-left">
            <b>React Portfolio</b> is a modern, animated portfolio website built with React, Vite, and TailwindCSS. It showcases my skills, projects, and contact information in a clean, responsive, and interactive UI. The site is designed for fast performance, accessibility, and a great user experience on all devices.
          </p>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2 text-left">Key Features:</h2>
            <ul className="text-left grid gap-2 list-disc list-inside text-gray-700 dark:text-gray-200">
              <li>Animated hero section with smooth scroll navigation</li>
              <li>Responsive card-based project showcase with filtering</li>
              <li>Contact form with validation and social links</li>
              <li>Light/dark mode toggle and modern glassmorphism UI</li>
              <li>Built with React, Vite, and TailwindCSS for speed and maintainability</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2 text-left">My Role:</h2>
            <p className="text-left text-gray-700 dark:text-gray-200">
              I designed and developed the entire application, from UI/UX to deployment. I focused on clean code, accessibility, and a delightful user experience, using best practices in React and modern CSS.
            </p>
          </div>
          {/* Tech stack badges */}
          <ul className="flex gap-3 mb-8">
            <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold flex items-center gap-1"><span>⚛️</span> React</li>
            <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold flex items-center gap-1"><span>⚡</span> Vite</li>
            <li className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold flex items-center gap-1"><span>🎨</span> TailwindCSS</li>
          </ul>
          {/* Back button */}
          <button onClick={() => navigate(-1)} className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow hover:scale-105 transition-transform cursor-pointer self-start">Back</button>
        </div>
      </div>
    </section>
  );
};



export default ProjectDetail;
