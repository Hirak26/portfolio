import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function ModernProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Machine Learning', 'Web Dev', 'IoT', 'NLP'];

  const projects = [
    {
      title: 'AI-Powered Sentiment Analysis',
      description: 'Advanced NLP system for real-time sentiment analysis of social media data using transformer models and BERT architecture.',
      tags: ['Python', 'NLP', 'BERT', 'PyTorch'],
      category: 'Machine Learning',
      color: 'from-blue-600 to-blue-700',
      link: 'https://github.com/Hirak26',
    },
    {
      title: 'Predictive Healthcare Analytics',
      description: 'Machine learning platform for predicting patient outcomes using ensemble methods and deep learning on electronic health records.',
      tags: ['Python', 'TensorFlow', 'Healthcare', 'ML'],
      category: 'Machine Learning',
      color: 'from-purple-600 to-purple-700',
      link: 'https://github.com/Hirak26',
    },
    {
      title: 'Smart IoT Home System',
      description: 'Comprehensive IoT solution for home automation with real-time monitoring, voice control, and energy optimization features.',
      tags: ['IoT', 'Arduino', 'MQTT', 'React'],
      category: 'IoT',
      color: 'from-green-600 to-green-700',
      link: 'https://github.com/Hirak26',
    },
    {
      title: 'E-commerce Recommendation Engine',
      description: 'Collaborative filtering and content-based recommendation system with hybrid approach for personalized product suggestions.',
      tags: ['Python', 'ML', 'MongoDB', 'APIs'],
      category: 'Machine Learning',
      color: 'from-pink-600 to-pink-700',
      link: 'https://github.com/Hirak26',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Full-stack web application with WebSocket support, featuring end-to-end encryption and multimedia sharing capabilities.',
      tags: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      category: 'Web Dev',
      color: 'from-cyan-600 to-cyan-700',
      link: 'https://github.com/Hirak26',
    },
    {
      title: 'Document Question Answering',
      description: 'NLP-based system for extracting answers from documents using transformer models and attention mechanisms.',
      tags: ['Python', 'Transformers', 'NLP', 'FastAPI'],
      category: 'NLP',
      color: 'from-orange-600 to-orange-700',
      link: 'https://github.com/Hirak26',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ opacity }} className="relative container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Innovative solutions showcasing my expertise in AI, ML, and software development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition-all"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-xl text-sm font-medium transition-all">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Hirak26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
