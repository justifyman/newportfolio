import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee, Brain, Heart, Target } from 'lucide-react';
import ThreeTransition from '../components/ThreeTransition';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const skills = [
    { name: "ReactJS", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "HTML/CSS", level: 100, color: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", level: 100, color: "from-teal-500 to-green-500" },
    { name: "UI/UX Design", level: 95, color: "from-orange-500 to-red-500" }
  ];

  

  const values = [
    { icon: <Code className="w-6 h-6" />, title: "Clean Code", desc: "Writing maintainable, scalable code" },
    { icon: <Palette className="w-6 h-6" />, title: "Design First", desc: "User experience drives development" },
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-black text-white font-lexend overflow-hidden pt-32 pb-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <ThreeTransition type="sphere" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-ultra-tight mb-6">
            <span>ABOUT</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              ME
            </span>
          </h1>
          <p className="text-xl text-gray-400 tracking-tighter max-w-3xl mx-auto leading-relaxed">
            Passionate frontend developer with a keen eye for design and a love for creating 
            exceptional digital experiences that blend functionality with aesthetics.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Story */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-3xl font-bold tracking-ultra-tight mb-6 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <Brain className="w-8 h-8 text-[#BA55D3]" />
                MY STORY
              </motion.h2>
              <div className="space-y-4 text-gray-400 tracking-tighter leading-relaxed">
                {[
                  "I'm an experienced front-end developer proficient in ReactJS, TailwindCSS, JavaScript since 2022.",
            "My experience spans from basic HTML and CSS to advanced ReactJS and TailwindCSS. I've been a web dev for over 3 years, and I'm always looking for new challenges to grow my skills.",
            "Contact me - and let's start discussing your next endeavor."
                ].map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <motion.h3 
                className="text-2xl font-bold tracking-ultra-tight mb-6 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-6 h-6 text-[#BA55D3]" />
                CORE VALUES
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-gray-900/20 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div 
                      className="text-[#BA55D3] group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {value.icon}
                    </motion.div>
                    <div>
                      <span className="text-sm tracking-tighter font-bold block group-hover:text-[#BA55D3] transition-colors duration-300">
                        {value.title}
                      </span>
                      <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        {value.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-3xl font-bold tracking-ultra-tight mb-6 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-8 h-8 text-[#BA55D3]" />
                SKILLS
              </motion.h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="space-y-3 group"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm tracking-tighter font-medium group-hover:text-[#BA55D3] transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs tracking-tighter text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: index * 0.1 + 0.5, 
                          duration: 1.5, 
                          ease: "easeOut" 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { number: "4+", label: "Technologies" },
                { number: "3", label: "Years Exp" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 border border-gray-800 bg-gray-900/20 backdrop-blur-sm hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-3xl font-bold tracking-ultra-tight mb-2 group-hover:text-[#BA55D3] transition-colors duration-300"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.6, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs tracking-tighter text-gray-500 uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>


       
      </div>
    </section>
  );
};

export default About;