import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ThreeTransition from '../components/ThreeTransition';

const Work: React.FC = () => {
  const projects = [
    {
      title: "muslimthread",
      description: "Comprehensive Islamic resources hub.",
      tech: ["React", "Tailwind"],
      year: "2025",
      status: "Live",
      image: "https://devjustify.vercel.app/Images/muslimthread.png", // Updated to actual UI screenshot
      url: "https://muslimthread.com/"
    },
    {
      title: "NoorNet",
      description: "Islamic search engine.",
      tech: ["React", "Tailwind", "Google Search API"],
      year: "2025",
      status: "Live",
      image: "https://devjustify.vercel.app/Images/image_2025-04-03_192656122.png", // Screenshot
      url: "https://noornet.xyz/"
    },
    {
      title: "Ijaba",
      description: "Let the Quran Talk to You — app client site.",
      tech: ["React", "Tailwind", "Lovable"],
      year: "2025",
      status: "Live",
      image: "https://devjustify.vercel.app/Images/ijabapost.png", // Screenshot
      url: "https://www.ijaba.app/"
    },
    {
      title: "OLD Portfolio Site",
      description: "My previous portfolio site showcasing my work.",
      tech: ["React", "Tailwind"],
      year: "2025",
      status: "Live",
      image: "https://media.discordapp.net/attachments/1306892617958686784/1394561072815538235/image.png?ex=687741b5&is=6875f035&hm=6f53ed04394215886c375e55b1c6af70287f0a107121af1c8caafa5dc01b27f4&=&format=webp&quality=lossless", // Screenshot
      url: "https://devjustify.vercel.app/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="work" className="relative min-h-screen bg-black text-white font-lexend overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <ThreeTransition type="cubes" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-wide mb-6">
            <span>RECENT</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">WORKS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A curated collection of my projects showcasing modern web development and user experience design.</p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto" // Increased gap
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-500 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 rounded-xl" />
              </div>

              {/* External Link */}
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm border border-white/20 rounded flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>

              {/* Status */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-xs text-green-400 bg-green-400/20 border border-green-400/30 px-3 py-1 rounded-full backdrop-blur-sm"> {project.status} </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-black/80 backdrop-blur-sm px-6 py-5 flex flex-col justify-end rounded-b-xl z-10">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold group-hover:text-[#BA55D3] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded">{project.year}</span>
                </div>
                <p className="text-sm text-gray-300 leading-snug group-hover:text-white transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
