// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
    e.target.reset();
  };

  return (
    <section className="py-20 bg-gradient-to-br  min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-6xl bg-white/90 rounded-3xl shadow-2xl p-0 md:p-10 flex flex-col md:flex-row gap-12 md:gap-0 items-stretch">
        {/* Left: Map with animation */}
        <div className="flex-1 min-h-[350px] rounded-3xl overflow-hidden flex items-center justify-center animate-slide-in-left">
          <div className="w-full h-full">
            <iframe
              title="Bahawalpur Map"
              src="https://www.google.com/maps?q=Bahawalpur,+Pakistan&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 350, border: 0, borderRadius: '1.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Right: Contact Form & Socials with animation */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 py-10 animate-slide-in-right">
          <h2 className="text-4xl font-extrabold text-[#1a237e] mb-6 text-center md:text-left tracking-tight">Let's Contact</h2>
          <p className="text-gray-600 mb-6 text-center md:text-left max-w-md mx-auto md:mx-0">Have a project in mind or want to collaborate? Fill out the form and I'll get back to you soon!</p>
          {showSuccess && (
            <div className="mb-4 w-full flex items-center justify-center">
              <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-3 rounded-lg shadow flex items-center gap-2 animate-fade-in-up">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
                <span className="font-semibold">Thank you! Your message was sent successfully.</span>
              </div>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-gray-50" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-gray-50" placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a237e] bg-gray-50" placeholder="Type your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all text-lg">Send Message</button>
          </form>
          {/* Socials */}
          <div className="flex gap-6 justify-center md:justify-start mt-8">
            <a href="https://www.linkedin.com/in/muhammad-kashif167/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#0A66C2] hover:scale-110 transition-transform text-2xl"><i className="ri-linkedin-box-fill"></i></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:scale-110 transition-transform text-2xl"><i className="ri-github-fill"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-400 hover:scale-110 transition-transform text-2xl"><i className="ri-twitter-fill"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-500 hover:scale-110 transition-transform text-2xl"><i className="ri-facebook-fill"></i></a>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-slide-in-left {
          animation: slideInLeft 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .animate-slide-in-right {
          animation: slideInRight 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
