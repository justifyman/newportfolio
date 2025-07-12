import ThreeBackground from './ThreeBackground';

const projects = [
  {
    title: "Neural Network Visualizer",
    description: "Interactive 3D visualization of neural network architectures with real-time training data.",
    tech: ["Three.js", "WebGL", "TypeScript"],
    status: "Live"
  },
  {
    title: "Quantum Computing Simulator",
    description: "Web-based quantum circuit simulator with drag-and-drop interface and state visualization.",
    tech: ["React", "WebAssembly", "Python"],
    status: "In Progress"
  },
  {
    title: "AI-Powered Code Generator",
    description: "Machine learning model that generates optimized code from natural language descriptions.",
    tech: ["TensorFlow", "Node.js", "GPT-4"],
    status: "Beta"
  },
  {
    title: "Blockchain Analytics Dashboard",
    description: "Real-time cryptocurrency transaction analysis with predictive market insights.",
    tech: ["D3.js", "Web3", "Solidity"],
    status: "Live"
  },
  {
    title: "Augmented Reality Portfolio",
    description: "AR experience showcasing projects in 3D space using WebXR technologies.",
    tech: ["WebXR", "A-Frame", "Three.js"],
    status: "Concept"
  },
  {
    title: "Distributed Computing Platform",
    description: "Peer-to-peer computing network for collaborative scientific simulations.",
    tech: ["WebRTC", "WASM", "Rust"],
    status: "Research"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-20 pb-12 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">
            PROJECTS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="flex-1 px-8 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  transform: `perspective(1000px) rotateY(${Math.sin(index * 0.5) * 5}deg) rotateX(${Math.cos(index * 0.3) * 3}deg)`,
                }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Beta' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-lg text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    View Project
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-white/60 text-sm font-light transform rotate-12 animate-pulse">
          scroll left to return
        </div>
      </div>
    </div>
  );
}