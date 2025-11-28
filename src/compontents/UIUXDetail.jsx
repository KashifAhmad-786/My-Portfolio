import React from 'react';
import { useNavigate } from 'react-router-dom';

const UIUXDetail = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4 md:px-10 relative">
     
        {/* Top Left: Image */}
       <div className="max-w-4xl w-full bg-white/90 dark:bg-blue-900/80 backdrop-blur-lg rounded-3xl shadow-2xl px-0 py-0 flex flex-col md:flex-row items-stretch border border-gray-200 dark:border-gray-700 animate-fade-in-up mt-24 mb-12 overflow-hidden">
        {/* Left: Project image */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-l-3xl">
          <img src="/assets/ok.png" alt="Landing Page Screenshot" className="w-full max-w-xs rounded-2xl shadow object-cover" style={{minHeight:180}} />
        </div>
        
        {/* Details Right of Image */}
        <div className="flex-1 flex flex-col justify-center items-start p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">UI/UX Design</h1>
          <div className="text-base md:text-lg text-gray-500 dark:text-gray-300 mb-4">Web & Mobile Applications / 2025</div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl">
            <b>UI/UX Design</b> project focused on creating intuitive user interfaces and seamless user experiences for web and mobile applications. Emphasizes accessibility, usability, and modern design trends.
          </p>
          <div className="mb-6 w-full">
            <h2 className="text-xl font-bold text-white mb-2">Key Features:</h2>
            <ul className="grid gap-2 list-none text-gray-700 dark:text-gray-200">
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Wireframing and prototyping with Figma</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Responsive, mobile-first layouts</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Micro-interactions and smooth animations</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-green-100 text-green-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Accessibility and usability best practices</li>
              <li className="flex items-center gap-2"><span className="w-6 h-6 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></span>Modern, clean, and engaging UI</li>
            </ul>
          </div>
          <div className="mb-6 w-full">
            <h2 className="text-xl font-bold text-white mb-2">My Role:</h2>
            <p className="text-gray-700 dark:text-gray-200">
              I led the UI/UX design process, from research and wireframing to prototyping and final implementation. Focused on user-centered design and delivering delightful digital experiences.
            </p>
          </div>
          <ul className="flex gap-3 mb-8">
            <li className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold flex items-center gap-1"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>React</li>
            <li className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold flex items-center gap-1"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Framer Motion</li>
            <li className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold flex items-center gap-1"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>TailwindCSS</li>
          </ul>
          <button onClick={() => navigate(-1)} className="mt-2 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow hover:scale-105 transition-transform cursor-pointer">Back</button>
        </div>
      </div>
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default UIUXDetail;
