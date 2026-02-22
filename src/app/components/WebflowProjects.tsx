import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function WebflowProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      number: '01',
      title: 'AI-Powered Sentiment Analysis',
      category: 'Machine Learning',
      description: 'Advanced NLP system using transformer models for real-time sentiment analysis of social media data.',
      tags: ['Python', 'BERT', 'PyTorch', 'NLP'],
      link: 'https://github.com/Hirak26',
    },
    {
      number: '02',
      title: 'Predictive Healthcare Analytics',
      category: 'Machine Learning',
      description: 'ML platform predicting patient outcomes using ensemble methods and deep learning on EHR data.',
      tags: ['TensorFlow', 'Healthcare', 'Deep Learning'],
      link: 'https://github.com/Hirak26',
    },
    {
      number: '03',
      title: 'Smart IoT Home System',
      category: 'IoT',
      description: 'Comprehensive IoT solution with real-time monitoring, voice control, and energy optimization.',
      tags: ['Arduino', 'MQTT', 'React', 'Cloud'],
      link: 'https://github.com/Hirak26',
    },
    {
      number: '04',
      title: 'E-commerce Recommendation Engine',
      category: 'Machine Learning',
      description: 'Hybrid recommendation system combining collaborative filtering and content-based approaches.',
      tags: ['Python', 'MongoDB', 'APIs', 'ML'],
      link: 'https://github.com/Hirak26',
    },
    {
      number: '05',
      title: 'Real-time Chat Application',
      category: 'Web Development',
      description: 'Full-stack app with WebSocket support, end-to-end encryption, and multimedia sharing.',
      tags: ['React', 'Node.js', 'WebSocket'],
      link: 'https://github.com/Hirak26',
    },
    {
      number: '06',
      title: 'Document Question Answering',
      category: 'NLP',
      description: 'NLP system extracting answers from documents using transformer models and attention mechanisms.',
      tags: ['Transformers', 'FastAPI', 'Python'],
      link: 'https://github.com/Hirak26',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen bg-white py-32 overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          style={{ y }}
          className="mb-24 max-w-7xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-6"
          >
            Selected Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            Featured
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
        </motion.div>

        {/* Projects List */}
        <div className="max-w-7xl mx-auto space-y-2">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group block relative"
            >
              <div className="border-t border-gray-200 py-8 hover:bg-gray-50 transition-all duration-300 px-6 rounded-xl">
                <div className="grid grid-cols-12 gap-6 items-center">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-3xl font-bold text-gray-300 group-hover:text-black transition-colors">
                      {project.number}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="col-span-10 md:col-span-5">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-2 flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                      <ExternalLink className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/Hirak26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xl font-semibold hover:text-blue-600 transition-colors group"
          >
            View All Projects
            <Github className="group-hover:translate-x-1 transition-transform" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}