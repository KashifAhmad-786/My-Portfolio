import React from 'react';
import { useNavigate } from 'react-router-dom';

const N8NDetail = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br px-4 md:px-10 text-center relative overflow-hidden">
      <div className="max-w-3xl w-full bg-white/90 dark:bg-blue-900/80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center border border-gray-200 dark:border-blue-700 animate-fade-in-up mt-24 mb-12">
        <img src="/assets/n8n.jpg" alt="N8N Workflow Screenshot" className="w-full max-w-lg rounded-xl shadow mb-8 object-cover" style={{minHeight:180}} />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">N8N Workflow Automation</h1>
        <div className="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-6">Business Process Automation / 2025</div>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          <b>N8N Workflow</b> automates business processes using custom n8n workflows, boosting efficiency and productivity. Integrates multiple services, APIs, and AI agents for seamless automation.
        </p>
        <div className="w-full mb-6">
          <h2 className="text-xl font-bold text-white mb-2 text-left">Key Features:</h2>
          <ul className="text-left grid gap-2 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Custom workflow automation for business processes</li>
            <li>Integration with APIs, databases, and cloud services</li>
            <li>AI-powered automation and decision making</li>
            <li>Visual workflow builder for easy management</li>
            <li>Scalable and secure for enterprise use</li>
          </ul>
        </div>
        <div className="w-full mb-6">
          <h2 className="text-xl font-bold text-white mb-2 text-left">My Role:</h2>
          <p className="text-left text-gray-700 dark:text-gray-200">
            I designed, implemented, and deployed custom n8n workflows, integrating AI agents and automating complex business logic for clients. Focused on reliability, scalability, and user-friendly management.
          </p>
        </div>
        <ul className="flex gap-3 mb-8">
          <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Workflow</li>
          <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Ai Automation</li>
          <li className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">Ai Agent</li>
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

export default N8NDetail;
