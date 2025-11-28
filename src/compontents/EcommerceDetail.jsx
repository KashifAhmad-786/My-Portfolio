import React from 'react';
import { useNavigate } from 'react-router-dom';

const EcommerceDetail = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-4xl sm:flex-row flex-col   w-full flex  items-start gap-0 bg-white/90 dark:bg-blue-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up mt-24 mb-12 p-0">
        {/* Top Left: Image */}
        <div className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg m-8 mt-8">
          <div className="relative w-full h-full">
            <img src="/assets/boss3.jpg" alt="E-commerce Dashboard Screenshot" className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-purple-500/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
        {/* Details Right of Image */}
        <div className="flex-1 flex flex-col justify-center items-start p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">E-commerce Dashboard.</h1>
          <div className="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-4">Admin Dashboard / 2025</div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl">
            <b>E-commerce Dashboard</b> is a powerful admin dashboard for managing products, orders, and analytics. It features real-time charts, authentication, and a modern responsive UI for seamless management of your e-commerce business.
          </p>
          <div className="mb-6 w-full">
            <h2 className="text-xl font-bold text-white mb-2">Key Features:</h2>
            <ul className="grid gap-2 list-none text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Product, order, and user management</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Interactive charts and analytics</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Authentication and role-based access</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Responsive design for all devices</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Modern UI with glassmorphism and dark mode</li>
            </ul>
          </div>
          <div className="mb-6 w-full">
            <h2 className="text-xl font-bold text-white mb-2">My Role:</h2>
            <p className="text-gray-700 dark:text-gray-200">
              I designed and developed the dashboard, focusing on usability, data visualization, and secure authentication. I implemented all UI/UX, chart integrations, and responsive layouts.
            </p>
          </div>
          <ul className="flex gap-3 mb-8">
            <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold flex items-center gap-1 "><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>React</li>
            <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold flex items-center gap-1"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>E.commerce</li>
            <li className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold flex items-center gap-1 "><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Tailwind</li>
          </ul>
          <button onClick={() => navigate(-1)} className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow hover:scale-105 transition-transform cursor-pointer">Back</button>
        </div>
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

export default EcommerceDetail;
