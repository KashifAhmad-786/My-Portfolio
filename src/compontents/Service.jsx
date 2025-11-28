import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Custom hook for scroll-triggered animation with direction
function useScrollFade(direction = 'up') {
  const ref = useRef();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(direction === 'left' ? 'animate-fade-in-left' : direction === 'right' ? 'animate-fade-in-right' : 'animate-fade-in-up');
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [direction]);
  return ref;
}


const services = [
  {
    icon: <i className="ri-window-fill text-4xl text-blue-500"></i>,
    title: 'Web Design',
    desc: 'Modern, responsive, and user-friendly website designs tailored to your brand.'
  },
  {
    icon: <i className="ri-code-s-slash-line text-4xl text-green-500"></i>,
    title: 'n8n Workflows',
    desc: 'Automate your business processes with custom n8n workflows for efficiency and productivity.'
  },
  {
    icon: <i className="ri-code-box-fill text-4xl text-red-500"></i>,
    title: 'Web Development',
    desc: 'Full-stack web development with a focus on performance and scalability.'
  },
  {
    icon: <i className="ri-apps-line text-4xl text-green-500"></i>,
    title: 'UI/UX Design',
    desc: 'Intuitive user interfaces and seamless user experiences for web and mobile applications.'
  },
  {
    icon: <i className="ri-database-2-line text-4xl text-orange-500"></i>,
    title: 'Database Management',
    desc: 'Robust database solutions for data storage, retrieval, and management.'
  },
  
  {
    icon: <i className="ri-store-line text-4xl text-green-500"></i>,
    title: 'E-Commerce',
    desc: 'Custom online stores with secure payments and seamless shopping experiences.'
  },
  {
    icon: <i className="ri-smartphone-line text-4xl text-purple-500"></i>,
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile app development for iOS and Android.'
  },
  {
    icon: <i className="ri-robot-2-line text-4xl text-yellow-500"></i>,
    title: 'AI Automation',
    desc: 'Automate business processes and boost productivity with AI solutions.'
  },
];

const Service = () => {
  return (
    <section className="py-16  ">
      <div className="max-w-5xl mx-auto px-4 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1a237e]">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow animate-fade-in-up`}
              style={{ animationDelay: `${0.1 * idx}s`, animationFillMode: 'both' }}
            >
              <div className="mb-4 ">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1a237e]">{service.title}</h3>
              <p className="text-gray-600 ">{service.desc}</p>
              <button
                className="mt-4 px-4 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm font-medium transition-colors cursor-pointer"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                See More
              </button>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.9s cubic-bezier(0.23, 1, 0.32, 1);
          }
        `}</style>
      </div>

      {/* Stats and Values Section */}

      <section className="mt-16 mb-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {[
            {
              icon: <i className="ri-focus-2-line text-3xl text-blue-300 mb-2"></i>,
              value: '20+',
              label: 'Projects Completed',
              direction: 'left',
            },
            {
              icon: <i className="ri-heart-3-fill text-3xl text-blue-300 mb-2"></i>,
              value: '100%',
              label: 'Client Satisfaction',
              direction: 'right',
            },
            {
              icon: <i className="ri-user-star-line text-3xl text-blue-300 mb-2"></i>,
              value: '2+',
              label: 'Years Experience',
              direction: 'left',
            },
            {
              icon: <i className="ri-star-smile-line text-3xl text-blue-300 mb-2"></i>,
              value: '24/7',
              label: 'Support Available',
              direction: 'right',
            },
          ].map((stat, idx) => {
            const ref = useScrollFade(stat.direction);
            return (
              <div
                key={stat.label}
                ref={ref}
                className={
                  `bg-gradient-to-br from-blue-900 to-blue-900/60 rounded-xl p-6 flex flex-col items-center text-center shadow-lg opacity-0 cursor-pointer transform transition-transform duration-300 hover:scale-105`
                }
                style={{ transition: 'opacity 0.5s, transform 0.5s' }}
              >
                {stat.icon}
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-blue-100 mt-1">{stat.label}</span>
              </div>
            );
          })}
        </div>
        {/* Values Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: 'Clean Code',
              desc: 'We write maintainable, scalable, and efficient code following best practices.',
              color: 'from-blue-800/80 to-gray-600/60',
              direction: 'left',
            },
            {
              title: 'User-Centric',
              desc: 'Our solutions are designed with your users in mind, ensuring the best experience.',
              color: 'from-blue-800/80 to-green-600/60',
              direction: 'right',
            },
            {
              title: 'Fast Performance',
              desc: 'Lightning-fast loading times and smooth interactions across all devices.',
              color: 'from-blue-800/80 to-red-600/60',
              direction: 'down',
            },
            {
              title: 'Quality First',
              desc: 'We never compromise on quality, delivering excellence in every project.',
              color: 'from-purple-800/80 to-purple-600/60',
              direction: 'down',
            },
          ].map((val, idx) => {
            const ref = useScrollFade(val.direction);
            return (
              <div
                key={val.title}
                ref={ref}
                className={`rounded-2xl p-6 bg-gradient-to-br ${val.color} text-white flex flex-col items-center text-center shadow-md opacity-0 cursor-pointer transform transition-transform duration-300 hover:scale-105`}
                style={{ transition: 'opacity 0.5s, transform 0.5s' }}
              >
                <div className="mb-3 bg-opacity-30 rounded-full p-3">{val.icon}</div>
                <h3 className="font-bold text-lg mb-1">{val.title}</h3>
                <p className="text-blue-100 text-sm">{val.desc}</p>
              </div>
            );
          })}
        </div>
        <style>{`
          .animate-fade-in-left {
            opacity: 1 !important;
            animation: fadeInLeft 1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          .animate-fade-in-right {
            opacity: 1 !important;
            animation: fadeInRight 1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          .animate-fade-in-up {
            opacity: 1 !important;
            animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(60px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
      {/* About/Expertise Sections - Modern Redesign with Animation */}
      <section className="py-20 bg-gradient-to-br " id="about">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
          {/* Section 1: Web Developer */}
          <div className="flex flex-col md:flex-row items-center gap-10 group">
            <div className="w-full md:w-1/2 animate-fade-in-up group-hover:scale-105 transition-transform duration-500">
              <img src="/assets/boss3.jpg" alt="Web Developer" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-up delay-100">
              <h3 className="text-sm font-semibold text-blue-600 uppercase mb-2 tracking-widest">Web Developer</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Building Modern Web Experiences</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Crafting responsive and dynamic web applications with clean code and performance in mind. Focused on modern tech stacks to deliver seamless digital experiences.
              </p>
              <a to="/ecommerce-detail" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                <Link
                  to="/ecommerce-detail"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Read more <i className="ri-arrow-right-line ml-2"></i>
                </Link>
                </a>
            </div>
          </div>
          {/* Section 2: UI/UX Designer */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 group">
            <div className="w-full md:w-1/2 animate-fade-in-up group-hover:scale-105 transition-transform duration-500">
              <img src="/assets/boss.jpg" alt="UI/UX Designer" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-up delay-100">
              <h3 className="text-sm font-semibold text-purple-600 uppercase mb-2 tracking-widest">UI/UX Designer</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Designing Seamless Interfaces</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Creating intuitive, user-centered interfaces to enhance user engagement and experience across web and mobile platforms.
              </p>
              <Link to="/project-detail" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                <a
                  href="/project-detail"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Read more <i className="ri-arrow-right-line ml-2"></i>
                  </a>
                </Link>
            </div>
          </div>
          {/* Section 3: AI Automation */}
          <div className="flex flex-col md:flex-row items-center gap-10 group">
            <div className="w-full md:w-1/2 animate-fade-in-up group-hover:scale-105 transition-transform duration-500">
              <img src="/assets/n8n.jpg" alt="AI Automation" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-up delay-100">
              <h3 className="text-sm font-semibold text-yellow-600 uppercase mb-2 tracking-widest">AI Automation</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Automating Smarter Workflows</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Leveraging AI technologies to automate repetitive tasks and streamline business operations with efficiency and intelligence.
              </p>
              <Link to="/n8n-detail" className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-semibold transition-colors">
                <Link
                  to="/n8n-detail"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-semibold transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Read more <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </Link>
            </div>
          </div>
           <div className="flex flex-col md:flex-row-reverse items-center gap-10 group">
            <div className="w-full md:w-1/2 animate-fade-in-up group-hover:scale-105 transition-transform duration-500">
              <img src="/assets/boss2.jpg" alt="UI/UX Designer" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-up delay-100">
              <h3 className="text-sm font-semibold text-purple-600 uppercase mb-2 tracking-widest">n8n Workflow</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Gmail Trigger Workflows</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Leveraging AI technologies to automate repetitive tasks and streamline business operations with efficiency and intelligence.
              </p>
              <Link to="/n8n-detail" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                <Link
                  to="/n8n-detail"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Read more <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10 group">
            <div className="w-full md:w-1/2 animate-fade-in-up group-hover:scale-105 transition-transform duration-500">
              <img src="/assets/1720.jpg" alt="Web Developer" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 animate-fade-in-up delay-100">
              <h3 className="text-sm font-semibold text-blue-600 uppercase mb-2 tracking-widest">App Developer</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Building Modern App Experiences</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Crafting responsive and dynamic App applications with clean code and performance in mind. Focused on modern tech stacks to deliver seamless digital experiences.
              </p>
              <Link to="/ecommerce-detail" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                <Link
                  to="/ecommerce-detail"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Read more <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          .delay-100 { animation-delay: 0.1s; }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>
    </section>
    
  );
}

export default Service