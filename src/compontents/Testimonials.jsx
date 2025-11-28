import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Marion Campbell',
    title: 'React developer',
    company: 'Google',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    stars: 5,
    content:
      "I’m a passionate Web Developer with over 10 years of experience building responsive, high-performance websites and web applications. I specialize in modern technologies like React, Next.js, Node.js, and Tailwind CSS, with a strong focus on clean code and intuitive user interfaces. From scalable full-stack solutions to seamless API integrations, I turn complex problems into elegant digital experiences. My goal is to deliver fast, secure, and user-friendly web solutions that help businesses grow and succeed online.",
  },
  {
    name: 'Ruby Sarah',
    title: 'UI/UX Designer',
    company: 'Amazon',
    avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
    stars: 5,
    content:
      "As a UI/UX Designer, I craft intuitive and visually compelling user experiences that balance aesthetics with functionality. With a strong understanding of user behavior, I design interfaces that are not only beautiful but also easy to navigate and optimized for engagement. I specialize in wireframing, prototyping, and user testing to ensure every design decision solves a real user need. My tools of choice include Figma, Adobe XD, and Tailwind CSS, which I use to translate ideas into responsive, accessible, and pixel-perfect interfaces. My mission is to create designs that feel effortless, solve problems, and leave a lasting impression.",
  },
  {
    name: 'Diane Pennebaker',
    title: 'Ai Automation',
    company: 'Tasla',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    stars: 5,
    content:
      'I specialize in AI automation, building intelligent systems that streamline workflows, boost productivity, and reduce manual effort. By leveraging tools like Python, OpenAI APIs, and no-code automation platforms such as Zapier and Make.com, I create smart solutions that handle repetitive tasks, data processing, content generation, and customer interactions. My focus is on integrating AI seamlessly into real-world applications—whether it\'s automating business operations, enhancing user experiences, or enabling data-driven decisions. I’m passionate about using artificial intelligence not just to save time, but to unlock new levels of efficiency and innovation.',
  },
  {
    name: 'Cheryl Smith',
    title: 'Web designer',
    company: 'Microsoft',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    stars: 5,
    content:
      'As a Web Designer, I create visually stunning, user-friendly websites that combine aesthetics with functionality. I specialize in crafting responsive layouts, intuitive navigation, and modern UI elements that enhance user experience across all devices. With strong skills in tools like Figma, Adobe XD, and Webflow—alongside HTML, CSS, and Tailwind CSS—I bring designs to life with pixel-perfect precision. I focus on clean, accessible design systems that reflect brand identity and drive user engagement. My goal is to design digital experiences that not only look great but also deliver real value.',
  },
];

const Testimonials = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Close modal on ESC or click outside
  React.useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpenIndex(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex]);

  return (
    <section className="relative py-20 px-4 md:px-0 bg-gradient-to-br  overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">Our clients talk</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          >
            <div className="w-20 h-20 rounded-full border-4 border-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 shadow-lg mb-4 overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center mb-2">
              <span className="font-bold text-lg text-gray-900">{t.name}</span>
              <span className="text-xs text-blue-500 font-medium">{t.title}</span>
            </div>
            <span className="text-sm font-semibold text-gray-400 mb-2 tracking-wide">{t.company}</span>
            <div className="flex gap-1 mb-2">
              {[...Array(t.stars)].map((_, i) => (
                <svg key={i} width="18" height="18" fill="#ffc107" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.417 8.253L12 18.896l-7.417 4.625L6 15.268 0 9.423l8.332-1.268z"/></svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-3 italic">"{t.content.substring(0, 120)}..."</p>
            <button
              className="text-blue-600 text-xs font-semibold hover:underline focus:outline-none mt-1 cursor-pointer"
              onClick={() => setOpenIndex(index)}
            >
              Read more
            </button>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-20 rounded-full blur-2xl"></div>
          </div>
        ))}
      </div>

      {/* Modal for full testimonial */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br bg-opacity-50 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full mx-4 animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonials[openIndex].avatar}
                alt={testimonials[openIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
              />
              <div>
                <span className="font-bold text-lg text-gray-900 flex items-center gap-1">
                  {testimonials[openIndex].name}
                  <svg className="inline-block ml-1" width="18" height="18" fill="#3b82f6" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3b82f6"/><path d="M10.5 16.5l-4-4 1.41-1.41L10.5 13.67l5.59-5.59L17.5 9.5z" fill="#fff"/></svg>
                </span>
                <span className="text-xs text-blue-500 font-medium block">{testimonials[openIndex].title}</span>
                <span className="text-lg text-gray-400 font-bold block">{testimonials[openIndex].company}</span>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(testimonials[openIndex].stars)].map((_, i) => (
                <svg key={i} width="22" height="22" fill="#ffc107" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.417 8.253L12 18.896l-7.417 4.625L6 15.268 0 9.423l8.332-1.268z"/></svg>
              ))}
            </div>
            <p className="text-gray-800 text-lg leading-relaxed mb-2">{testimonials[openIndex].content}</p>
          </div>
        </div>
      )}

      {/* Decorative background shapes */}
      <div className="absolute w-72 h-72 bg-blue-300 opacity-10 rounded-full blur-3xl -z-10 -top-20 -left-20 animate-blob" />
      <div className="absolute w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl -z-10 -bottom-32 -right-24 animate-blob animation-delay-2000" />
      <div className="absolute w-60 h-60 bg-pink-300 opacity-10 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-4000" />
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
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

export default Testimonials;
