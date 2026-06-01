// src/components/Home.jsx
import React, { useRef, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
// Animated subtitle loop for roles
const roles = [
  'Mern stack Developer',
  'Web Designer',
  'Ai Automation',
];

function useRoleLoop(interval = 2000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval]);
  return roles[index];
}
// Custom hook for scroll-triggered fade-in animation
function useScrollFade() {
  const ref = useRef();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}


import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const currentRole = useRoleLoop(2000);
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center  px-4 md:px-10 text-center relative overflow-hidden"
    >
      {/* Hero Section */}
      <div className="z-10 pt-24 pb-12 w-full flex flex-col items-center">
        <img
          src="/assets/kashif 2.jpeg"
          alt="Kashif"
          className="w-32 h-32 rounded-full border-4  shadow-lg mb-6 object-cover animate-fade-in-up"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-2 animate-fade-in-up bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Kashif Ahmad
        </h1>
        {/* Animated subtitle loop */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800 animate-fade-in-up delay-100 min-h-[2.5rem]">
          <span className="animated-role" key={currentRole}>{currentRole}</span>
        </h2>
      <style>{`
        .animated-role {
          display: inline-block;
          min-width: 180px;
          animation: fadeInRole 1s cubic-bezier(0.23, 1, 0.32, 1);
          transition: color 0.3s;
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes fadeInRole {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in-up delay-200 max-w-xl mx-auto">
          I'm a Mern Stack developer, web designer, and AI automation enthusiast specializing in building fast, responsive, and modern web applications. My portfolio showcases clean code, reusable components, and real-world projects crafted with React, Tailwind CSS, and intelligent automation solutions.
        </p>
        <div className="flex gap-4 justify-center mb-8 animate-fade-in-up delay-300">
          <Link to="/" className="block px-4 py-2 rounded-md font-semibold transition-all duration-200 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 shadow-md md:shadow-none">Get Started</Link>
          <Link to="/contact" className="hero-link">Contact Me</Link>
          
        </div>
        {/* Social Icons */}
        <div className="flex gap-5 justify-center mb-4 animate-fade-in-up delay-400">
          <a href="https://www.linkedin.com/in/muhammad-kashif167/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#0A66C2] hover:scale-110 transition-transform">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:scale-110 transition-transform">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-blue-400">
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
            
        </div>
      </div>

      

      {/* Featured Projects Preview */}
      {(() => {
        // Custom hook for each card to trigger slide-in
        function useSlideIn(direction = 'left') {
          const ref = useRef();
          useEffect(() => {
            const node = ref.current;
            if (!node) return;
            const handleIntersect = (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  node.classList.add(direction === 'left' ? 'slide-in-left' : 'slide-in-right');
                  node.classList.remove('opacity-0');
                }
              });
            };
            const observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.15 });
            observer.observe(node);
            return () => observer.disconnect();
          }, [direction]);
          return ref;
        }

        // Card data for mapping
        const projectCards = [
          {
            title: 'React Portfolio',
            desc: 'A personal portfolio website built with React and Vite, featuring smooth animations and responsive design.',
            tags: ['React', 'Vite', 'TailwindCSS'],
            link: '/project-detail',
          },
          {
            title: 'Landing Page',
            desc: 'A modern, animated landing page for a SaaS product, optimized for conversions.',
            tags: ['React', 'Framer Motion', 'TailwindCSS'],
            link: '/landing-detail',
          },
          {
            title: 'UI/UX Design',
            desc: 'Intuitive user interfaces and seamless user experiences for web and mobile applications.',
            tags: ['React', 'Framer Motion', 'TailwindCSS'],
            link: '/uiux-detail',
          },
          {
            title: 'Web Development',
            desc: 'Full-stack web development with a focus on performance and scalability.',
            tags: ['React', 'Developor', 'TailwindCSS'],
            link: '/webdev-detail',
          },
          {
            title: 'E-commerce Dashboard',
            desc: 'Admin dashboard for managing products, orders, and analytics, with charts and authentication.',
            tags: ['React', 'E-commerce', 'TailwindCSS'],
            link: '/ecommerce-detail',
          },
          {
            title: 'N8N workflow',
            desc: 'Automate your business processes with custom n8n workflows for efficiency and productivity.',
            tags: ['Workflow', 'Ai Automation', 'Ai Agent'],
            link: '/n8n-detail',
          },
        ];

        const projectsRef = useScrollFade();
        return (
          <div ref={projectsRef} className="w-full max-w-4xl mx-auto mt-8 mb-12 opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-left md:text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectCards.map((card, idx) => {
                const direction = idx % 2 === 0 ? 'left' : 'right';
                const cardRef = useSlideIn(direction);
                return (
                  <div
                    key={card.title}
                    ref={cardRef}
                    className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-2xl transition-shadow opacity-0"
                  >
                    <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                    <p className="text-gray-600 mb-2">{card.desc}</p>
                    <div className="flex gap-2 mb-2">
                      {card.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-1 rounded text-xs ${tag === 'React' ? 'bg-blue-100 text-blue-700' : tag === 'Vite' ? 'bg-purple-100 text-purple-700' : tag === 'TailwindCSS' ? 'bg-pink-100 text-pink-700' : tag === 'Framer Motion' ? 'bg-purple-100 text-purple-700' : tag === 'Developor' ? 'bg-purple-100 text-purple-700' : tag === 'E-commerce' ? 'bg-purple-100 text-purple-700' : tag === 'Workflow' ? 'bg-blue-100 text-blue-700' : tag === 'Ai Automation' ? 'bg-purple-100 text-purple-700' : tag === 'Ai Agent' ? 'bg-pink-100 text-pink-700' : ''}`}>{tag}</span>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate(card.link);
                      }}
                      className="text-blue-600 hover:underline font-medium focus:outline-none bg-transparent border-none cursor-pointer"
                    >
                      See More
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  navigate('/projects');
                }}
                className="hero-link inline-block bg-transparent border-none cursor-pointer"
              >
                See All Projects
              </button>
            </div>
          </div>
        );
      })()}
      <style>{`
        .slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.23, 1, 0.32, 1) both;
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
      {/* Team Section - Modern Redesign */}
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-10 text-center text-[#1a237e]">Meet Best Client</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Member 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow animate-fade-in-up">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Walter White" className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 mb-4 shadow" />
            <h4 className="text-xl font-bold text-[#1a237e] mb-1">Walter White</h4>
            <p className="text-blue-600 font-medium mb-2">Web Develpoer</p>
            <p className="text-gray-500 mb-4">Experienced web developer leading innovative solutions with over a decade in the tech industry.</p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-[#0A66C2] hover:scale-110 transition-transform" aria-label="LinkedIn"><i className="ri-linkedin-box-fill text-2xl"></i></a>
              <a href="#" className="text-gray-800 hover:scale-110 transition-transform" aria-label="GitHub"><i className="ri-github-fill text-2xl"></i></a>
              <a href="#" className="text-blue-500 hover:scale-110 transition-transform" aria-label="Twitter"><i className="ri-twitter-fill text-2xl"></i></a>
            </div>
          </div>
          {/* Member 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow animate-fade-in-up delay-100">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Jhonson" className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 mb-4 shadow" />
            <h4 className="text-xl font-bold text-[#1a237e] mb-1">Sarah Jhonson</h4>
            <p className="text-purple-600 font-medium mb-2">UI/UX Designer</p>
            <p className="text-gray-500 mb-4">Expert in UI/UX design, creating intuitive and user-centered digital experiences.</p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-[#0A66C2] hover:scale-110 transition-transform" aria-label="LinkedIn"><i className="ri-linkedin-box-fill text-2xl"></i></a>
              <a href="#" className="text-gray-800 hover:scale-110 transition-transform" aria-label="GitHub"><i className="ri-github-fill text-2xl"></i></a>
              <a href="#" className="text-pink-500 hover:scale-110 transition-transform" aria-label="Instagram"><i className="ri-instagram-fill text-2xl"></i></a>
            </div>
          </div>
          {/* Member 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow animate-fade-in-up delay-200">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="William Anderson" className="w-32 h-32 rounded-full object-cover border-4 border-green-200 mb-4 shadow" />
            <h4 className="text-xl font-bold text-[#1a237e] mb-1">William Anderson</h4>
            <p className="text-green-600 font-medium mb-2">Ai Automation</p>
            <p className="text-gray-500 mb-4">AI automation expert focused on building scalable, future-ready tech solutions.</p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-[#0A66C2] hover:scale-110 transition-transform" aria-label="LinkedIn"><i className="ri-linkedin-box-fill text-2xl"></i></a>
              <a href="#" className="text-gray-800 hover:scale-110 transition-transform" aria-label="GitHub"><i className="ri-github-fill text-2xl"></i></a>
              <a href="#" className="text-green-500 hover:scale-110 transition-transform" aria-label="Dribbble"><i className="ri-dribbble-fill text-2xl"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Interactive */}
      <FAQSection />
  

      {/* Services/Skills Preview */}
      <div className="w-full max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-bold mb-6 text-left md:text-center">What I Do</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 animate-fade-in-up">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 text-blue-500" viewBox="0 0 24 24"><path d="M16 18V20H8V18"/><rect x="4" y="4" width="16" height="14" rx="2"/></svg>
            <span className="font-semibold">Web Design</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 animate-fade-in-up delay-100">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 text-purple-500" viewBox="0 0 24 24"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20V16"/></svg>
            <span className="font-semibold">Web Animation</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 animate-fade-in-up delay-200">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 text-pink-500" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <span className="font-semibold">React Development</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 animate-fade-in-up delay-300">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mb-2 text-green-500" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
            <span className="font-semibold">Responsive Design</span>
          </div>
        </div>
      </div>
      
      {/* About Me & Skills Section */}
      {(() => {
        const aboutRef = useScrollFade();
        return (
          <section ref={aboutRef} className="w-full max-w-5xl mx-auto mt-8 mb-12 bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-10 opacity-0">
            {/* About Me Left */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 text-[#1a237e] tracking-tight">Kashif Ahmad</h2>
              <p className="text-gray-600 mb-4 max-w-md">A Passionate React Developer, Web Designer, and AI Automation enthusiast building fast, responsive, and modern web apps with clean code, reusable components, and real-world solutions using React, Tailwind CSS, and smart automation.</p>
              <ul className="text-gray-700 text-sm space-y-2 mb-4">
                <li className="flex items-center gap-2"><i className="ri-map-pin-line text-blue-500"></i> Bahawalpur, Pakistan</li>
                <li className="flex items-center gap-2"><i className="ri-phone-line text-blue-500"></i> +92 3019418167</li>
                <li className="flex items-center gap-2"><i className="ri-mail-line text-blue-500"></i> 17kashifahmad@gmail.com</li>
              </ul>
            </div>
            {/* Profile Image Center */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-4 border-blue-200 shadow-lg overflow-hidden flex items-center justify-center bg-gray-100">
                <img src="/assets/kashif 2.jpeg" alt="Kashif Ahmad" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Skills Right */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-[#1a237e]">My Professional Skills</h3>
              <p className="text-gray-600 mb-4 max-w-md">To ensure business growth, I offer expertise in React development, UI/UX design, and web animation to help you with modern, scalable solutions.</p>
              <div className="w-full max-w-xs space-y-4">
                <div>
                  <div className="flex justify-between mb-1"><span className="font-medium text-gray-700">React Development</span><span className="text-sm text-gray-500">95%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-500 h-2.5 rounded-full skill-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span className="font-medium text-gray-700">Web Designer</span><span className="text-sm text-gray-500">85%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-purple-500 h-2.5 rounded-full skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span className="font-medium text-gray-700">Ai Automation</span><span className="text-sm text-gray-500">80%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-pink-500 h-2.5 rounded-full skill-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })()}


      <div className="w-full max-w-2xl mx-auto mb-12 text-center animate-fade-in-up delay-200">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/service');
          }}
          className="hero-link inline-block bg-transparent border-none cursor-pointer"
        >
          MY Services
        </button>
      </div>
      <Testimonials />
       <section
      id="contact"
      className="section__container contact__container text-center py-12 px-6">
      <div className="logo text-4xl font-bold bg-blue-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        K
      </div>
      <h2 className="section__header text-3xl font-semibold text-[##485FA5] mb-2">
        Let's Talk With Me!
      </h2>
      <p className="section__description text-gray-600 max-w-xl mx-auto mb-6">
        An open invitation to connect, and exploring collaborative opportunities
        on my personal portfolio website.
      </p>

      <div className="contact__socials flex justify-center gap-5 text-2xl text-[#456F89]">
        <a href="#"><i className="ri-twitter-fill hover:text-blue-500"></i></a>
        <a href="#"><i className="ri-linkedin-fill hover:text-blue-700"></i></a>
        <a href="#"><i className="ri-behance-fill hover:text-blue-600"></i></a>
        <a href="#"><i className="ri-dribbble-line hover:text-pink-500"></i></a>
        <a href="#"><i className="ri-pinterest-line hover:text-red-500"></i></a>
      </div>
    </section>  

      {/* Call to Action */}
      <div className="w-full max-w-2xl mx-auto mb-12 text-center animate-fade-in-up delay-200">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/contact');
          }}
          className="hero-link inline-block bg-transparent border-none cursor-pointer"
        >
          Contact Me
        </button>
      </div>

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl -top-20 -left-20 animate-blob" />
        <div className="absolute w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl -bottom-32 -right-24 animate-blob animation-delay-2000" />
        <div className="absolute w-60 h-60 bg-pink-300 opacity-20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />
      </div>

      {/* Smooth scroll behavior and animations */}
      <style>{`
        .skill-bar {
          transform: translateX(-100%);
          opacity: 0;
          animation: slideInBar 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .skill-bar:nth-child(1) { animation-delay: 0.2s; }
        .skill-bar:nth-child(2) { animation-delay: 0.4s; }
        .skill-bar:nth-child(3) { animation-delay: 0.6s; }
        @keyframes slideInBar {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        html {
          scroll-behavior: smooth;
        }
        .hero-link {
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1.125rem;
          background: rgba(255,255,255,0.7);
          transition: all 0.3s;
          box-shadow: 0 2px 8px 0 rgba(0,0,0,0.06);
          cursor: pointer;
        }
        .hero-link:hover {
          background: linear-gradient(to right, #60a5fa, #a78bfa);
          color: #fff;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
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
    </section>
  );
};


import { useState } from 'react';
import Testimonials from './Testimonials';

const faqData = [
  {
    question: 'What technologies do you use for React development?',
    answer: 'I use React, Vite, TailwindCSS, Framer Motion, and integrate with APIs and backend services as needed for each project.'
  },
  {
    question: 'Do you build fully responsive and SEO-friendly websites?',
    answer: 'Yes, all my websites are fully responsive, mobile-friendly, and follow best SEO practices for optimal search engine ranking.'
  },
  {
    question: 'Can you integrate APIs and handle backend connections?',
    answer: 'Absolutely! I have experience integrating RESTful APIs, GraphQL, and connecting to various backend platforms securely.'
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="question px-6 py-12">
      <div className="question1 max-w-3xl mx-auto">
        <div className="question3 text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            Answers to common questions about my skills, workflow, and how I build high-performance React applications.
          </p>
        </div>
        {/* FAQ Items */}
        {faqData.map((item, idx) => (
          <div key={idx} className="question4 border-b">
            <div
              className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-100"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              
              <div className="br flex items-center gap-3">
                <i className="faq-icon bi bi-question-circle text-[#456F89] text-xl"></i>
                <h3 className="text-base font-medium">{item.question}</h3>
              </div>
              
              <div className="br2">
                <i className={`bi ${openIndex === idx ? 'bi-chevron-down' : 'bi-chevron-right'} text-[#456F89] text-lg transition-all duration-200`}></i>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
            </div>
            {openIndex === idx && (
              <div className="faq-answer px-10 pb-4 text-left text-gray-600 animate-fade-in-up">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="question2 mt-8"></div>
    </div>
    
  );
}

export default Home;
