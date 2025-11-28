// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-[#485FA5] text-white py-10 mt-12 shadow-inner border-t border-blue-900">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-4">
      {/* Left: Contact Info */}
      <div className="flex-1 mb-8 md:mb-0">
        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.828 0l-4.243-4.243a8 8 0 1 1 11.314 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            DHA Street 6<br />Bahawalpur, Pakistan
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.01.37 2 .73 2.94a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.94.36 1.93.6 2.94.73A2 2 0 0 1 21 16.91z"/></svg>
            </span>
            +92 301 9418167
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
            </span>
            <a href="https://gmail.com" className="hover:underline text-blue-200 cursor-pointer" target='_blank'>17kashifahmad@gmail.com</a>
          </li>
        </ul>
      </div>

      {/* Right: About & Social */}
      <div className="flex-1 flex flex-col items-start md:items-end">
        <div className="mb-4">
          <div className="font-semibold text-base mb-2">About this portfolio</div>
          <div className="text-gray-300 text-sm max-w-xs">
            Welcome to my professional portfolio! I am Kashif Ahmad, a passionate React developer specializing in modern, responsive web applications. Here you’ll find my best work, skills, and contact details. Let’s build something amazing together.
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="https://www.facebook.com" target='_blank' aria-label="Facebook" className="hover:text-blue-400">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="https://www.twitter.com" target='_blank' aria-label="Twitter" className="hover:text-blue-400">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-kashif167" target='_blank' aria-label="LinkedIn" className="hover:text-blue-400">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
          </a>
          <a href="https://GitHub.com" target='_blank' aria-label="GitHub" className="hover:text-blue-400">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-8">
      &copy; 2025 Kashif Ahmad. All rights reserved.
    </div>
  </footer>
);

export default Footer;
