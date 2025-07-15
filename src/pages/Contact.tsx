import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle, Calendar, Zap, Instagram } from 'lucide-react';
import ThreeTransition from '../components/ThreeTransition';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "EMAIL",
      primary: "manjustify@gmail.com",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:manjustify@gmail.com"
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "INSTAGRAM",
      primary: "@justifyguy",
      secondary: "Available at all times.",
      color: "from-green-500 to-teal-500",
      href: "https://www.instagram.com/justifyguy"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "DISCORD",
      primary: "justifyman",
      secondary: "Preferred contact method",
      color: "from-purple-500 to-indigo-500",
      href: "https://discord.com/users/877654517733261342/"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub", color: "hover:text-gray-300" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter", color: "hover:text-blue-300" }
  ];

  const availability = [
    { label: "Current Status", value: "Available", color: "text-green-400", icon: <CheckCircle className="w-4 h-4" /> },
    { label: "Response Time", value: "Within 24 hours", color: "text-white", icon: <Clock className="w-4 h-4" /> },
    { label: "Completion Time", value: "Super Quick!", color: "text-white", icon: <Calendar className="w-4 h-4" /> },
    { label: "Time Zone", value: "GMT+4", color: "text-gray-300", icon: <MapPin className="w-4 h-4" /> }
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen bg-black text-white font-lexend overflow-hidden pt-32 pb-20"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ThreeTransition type="particles" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-ultra-tight mb-6">
            <span>GET IN</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              TOUCH
            </span>
          </h1>
          <p className="text-xl text-gray-400 tracking-tighter max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-ultra-tight mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-[#BA55D3]" />
              CONTACT METHODS
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-6 p-6 rounded-lg bg-gray-900/20 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300 group block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="text-[#BA55D3] group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold tracking-ultra-tight mb-1 group-hover:text-[#BA55D3] transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 tracking-tighter text-lg group-hover:text-white transition-colors duration-300">
                      {info.primary}
                    </p>
                    <p className="text-gray-500 text-sm tracking-tighter">
                      {info.secondary}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Availability & Social */}
          <div className="space-y-8">
            {/* Availability Status */}
            <div>
              <h2 className="text-3xl font-bold tracking-ultra-tight mb-8 flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#BA55D3]" />
                AVAILABILITY
              </h2>
              
              <div className="border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-8 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 rounded-lg">
                <div className="space-y-6">
                  {availability.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-sm tracking-tighter text-gray-400 flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
                      <span className={`text-sm tracking-tighter ${item.color} flex items-center font-medium`}>
                        {item.label === "Current Status" && (
                          <motion.div 
                            className="w-2 h-2 bg-green-400 rounded-full mr-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            

            {/* Location */}
            <div className="border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-6 hover:border-gray-600 hover:bg-gray-800/30 transition-all duration-300 rounded-lg">
              <h3 className="text-xl font-bold tracking-ultra-tight mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#BA55D3]" />
                READY?
              </h3>
              <div className="space-y-2">
                <p className="text-gray-300 tracking-tighter">
                  Let's start discussing your next project.
                </p>
                <p className="text-gray-500 text-sm tracking-tighter">
                  Remote work available worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;