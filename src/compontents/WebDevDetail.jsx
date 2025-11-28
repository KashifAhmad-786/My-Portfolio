import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebDevDetail = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br px-4 md:px-10 text-center relative overflow-hidden">
      <div className="max-w-3xl w-full bg-white/90 dark:bg-blue-900/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center border border-gray-200 dark:border-blue-700 animate-fade-in-up mt-24 mb-12">
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Web Development Screenshot" className="w-full max-w-lg rounded-xl shadow mb-8 object-cover" style={{minHeight:180}} />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Web Development</h1>
        <div className="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-6">Full-Stack Project / 2025</div>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          <b>Web Development</b> project focused on building scalable, high-performance web applications using modern technologies. Includes both frontend and backend, optimized for speed, security, and user experience.
        </p>
        <div className="w-full mb-6">
          <h2 className="text-xl font-bold text-white mb-2 text-left">Key Features:</h2>
          <ul className="text-left grid gap-2 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Full-stack architecture (frontend + backend)</li>
            <li>RESTful APIs and real-time data</li>
            <li>Authentication and authorization</li>
            <li>Performance and SEO optimization</li>
            <li>Responsive, mobile-first design</li>
          </ul>
        </div>
        <div className="w-full mb-6">
          <h2 className="text-xl font-bold text-white mb-2 text-left">My Role:</h2>
          <p className="text-left text-gray-700 dark:text-gray-200">
            I led the development of both frontend and backend, implemented best practices for code quality, security, and performance, and ensured a seamless user experience across devices.
          </p>
        </div>
        <ul className="flex gap-3 mb-8">
          <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">React</li>
          <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Developer</li>
          <li className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">TailwindCSS</li>
        </ul>
        <button onClick={() => navigate(-1)} className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow hover:scale-105 transition-transform cursor-pointer">Back</button>
      </div>
      {/*
        --- EXPLANATION ---
        - This page uses a glassmorphism card for a modern, professional look.
        - Project image, title, and subtitle are prominent for branding.
        - Features and role are clearly listed for company/case-study style.
        - Tech stack badges and links are visually grouped.
        - Back button improves navigation.
        - All content is responsive and accessible.
      */}
    </section>
  );
};

export default WebDevDetail;
