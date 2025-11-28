import UIUXDetail from './compontents/UIUXDetail';
import WebDevDetail from './compontents/WebDevDetail';
import N8NDetail from './compontents/N8NDetail';
import EcommerceDetail from './compontents/EcommerceDetail';
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './compontents/Home';
import Projects from './compontents/Projects';
import Contact from './compontents/Contact';
import Navbar from './compontents/Navbar';
import Footer from './compontents/Footer';  
import Service from './compontents/Service';
import ProjectDetail from './compontents/ProjectDetail';
import LandingPageDetail from './compontents/LandingPageDetail';


const App = () => {
  const [dark, setDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <Router>
      <div className={
        `min-h-screen font-sans transition-colors duration-500 bg-gradient-to-br ` +
        (dark
          ? 'from-gray-900 via-gray-800 to-gray-700 text-gray-100'
          : 'from-blue-50 via-white to-purple-50 text-gray-900')
      }>
        <Navbar/>
        <main className="max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/project-detail" element={<ProjectDetail/>} />
            <Route path="/landing-detail" element={<LandingPageDetail/>} />
            <Route path="/ecommerce-detail" element={<EcommerceDetail/>} />
            <Route path="/n8n-detail" element={<N8NDetail/>} />
            <Route path="/webdev-detail" element={<WebDevDetail/>} />
            <Route path="/uiux-detail" element={<UIUXDetail/>} />
          </Routes>
        </main>
        <Footer />
        {/* Soft animated background shapes */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute w-80 h-80 bg-blue-200 dark:bg-blue-900 opacity-30 rounded-full blur-3xl -top-20 -left-20 animate-blob" />
          <div className="absolute w-96 h-96 bg-purple-200 dark:bg-purple-900 opacity-20 rounded-full blur-3xl -bottom-32 -right-24 animate-blob animation-delay-2000" />
          <div className="absolute w-60 h-60 bg-pink-200 dark:bg-pink-900 opacity-20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />
        </div>
        <style>{`
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes blob {
            0%, 100% { transform: scale(1) translate(0, 0); }
            33% { transform: scale(1.1, 0.9) translate(30px, -20px); }
            66% { transform: scale(0.9, 1.1) translate(-20px, 30px); }
          }
        `}</style>
      </div>
    </Router>
  );
};

export default App;
