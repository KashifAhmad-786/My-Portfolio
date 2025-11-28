// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar-2025 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 md:px-8">
        {/* Logo and Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/'); }}>
          <img src="/assets/kashif.jpg" alt="Kashif Ahmad" className="w-12 h-12 rounded-2xl border-2 border-white shadow-lg object-cover" />
          <span className="text-2xl font-bold tracking-wide text-[#1a237e] bg-white bg-opacity-80 px-3 py-1 rounded-xl shadow">Portfilo</span>
        </div>
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden ml-4 p-2 rounded-xl bg-white bg-opacity-40 backdrop-blur focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg className="w-7 h-7 text-[#1a237e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Navigation Links */}
        <ul
          className={`navbar-links-2025 flex-col md:flex-row md:flex gap-2 md:gap-4 text-base font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-white bg-opacity-90 md:bg-transparent transition-all duration-300 rounded-b-xl shadow-lg md:shadow-none z-40 ${menuOpen ? 'flex' : 'hidden md:flex'}`}
        >
          <li>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/'); setMenuOpen(false); }}
              className="nav-btn-2025"
            >Home</button>
          </li>
          <li>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/projects'); setMenuOpen(false); }}
              className="nav-btn-2025"
            >Projects</button>
          </li>
          <li>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/service'); setMenuOpen(false); }}
              className="nav-btn-2025"
            >Service</button>
          </li>
          <li>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/contact'); setMenuOpen(false); }}
              className="nav-btn-2025"
            >Contact</button>
          </li>
          <li>
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); navigate('/contact'); setMenuOpen(false); }}
              className="nav-btn-2025 nav-btn-2025-primary"
            >Get Started</button>
          </li>
        </ul>
      </div>
      <style>{`
        .navbar-2025 {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 24px 0 rgba(60,60,120,0.10);
          border-bottom: 1px solid rgba(60,60,120,0.10);
          border-radius: 0 0 1.5rem 1.5rem;
        }
        .navbar-links-2025 {
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        }
        .nav-btn-2025 {
          position: relative;
          padding: 0.5rem 1.3rem;
          border-radius: 0.8rem;
          background: transparent;
          color: #1a237e;
          font-weight: 600;
          font-size: 1.08rem;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          outline: none;
        }
        .nav-btn-2025:after {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          bottom: 0.2rem;
          transform: translateX(-50%) scaleX(0);
          width: 70%;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .nav-btn-2025:hover:after, .nav-btn-2025:focus:after {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-btn-2025:hover, .nav-btn-2025:focus {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          color: #fff;
          box-shadow: 0 2px 8px 0 rgba(60,60,120,0.10);
        }
        .nav-btn-2025-primary {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          color: #fff;
          box-shadow: 0 2px 8px 0 rgba(60,60,120,0.14);
        }
        .nav-btn-2025-primary:after {
          display: none;
        }
        .nav-btn-2025-primary:hover, .nav-btn-2025-primary:focus {
          background: linear-gradient(90deg, #2563eb, #a78bfa);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
