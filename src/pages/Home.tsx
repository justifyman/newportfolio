import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Globe, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Subtitle */}
        <div className="mb-6">
          <span className="inline-flex items-center text-xs tracking-widest text-gray-400 uppercase border border-gray-800 rounded-full px-4 py-2 hover:border-gray-600 transition-colors duration-300">
            <Zap className="w-3 h-3 mr-2" />
            justifydev
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-light font-serif tracking-wide leading-none mb-8">
          <h1 className="block">
            <span className="font-serif">frontend-</span><br />done <span className="text-purple-500 font-serif">right.</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 tracking-tighter max-w-3xl mx-auto mb-12 leading-relaxed">
          stellar user interfaces. intuitive, responsive designs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={() => scrollToSection('work')}
            className="group inline-flex items-center bg-white text-black px-8 py-4 text-sm font-bold tracking-tighter uppercase transition-all duration-300 hover:bg-gray-200 hover:scale-105 relative overflow-hidden"
          >
            view work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center border border-gray-700 text-white px-8 py-4 text-sm font-bold tracking-tighter uppercase transition-all duration-300 hover:border-white hover:bg-white hover:text-black relative overflow-hidden"
          >
            <Phone className="mr-2 w-4 h-4" />
            contact me
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-2xl mx-auto">
          {[
            { number: "SEVERAL", label: "PROJECTS" },
            { number: "100%", label: "SATISFACTION" },
            { number: "3YRS+", label: "EXPERIENCE" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold tracking-ultra-tight mb-2">
                {stat.number}
              </div>
              <div className="text-xs tracking-tighter text-gray-500 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Elements */}
      <div className="hidden lg:block absolute left-8 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col items-center space-y-6">
          <Globe className="w-5 h-5 text-gray-600 hover:text-[#BA55D3] transition-colors duration-300" />
          <div className="w-px bg-gray-800 h-20" />
          <span className="text-xs tracking-tighter text-gray-600 -rotate-90 whitespace-nowrap hover:text-white transition-colors duration-300">
            professional
          </span>
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col items-center space-y-6">
          <Zap className="w-5 h-5 text-gray-600 hover:text-[#BA55D3] transition-colors duration-300" />
          <div className="w-px bg-gray-800 h-20" />
          <span className="text-xs tracking-tighter text-gray-600 rotate-90 whitespace-nowrap hover:text-white transition-colors duration-300">
            frontend dev
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;