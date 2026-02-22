import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export function WebflowPublications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const publications = [
    {
      year: '2024',
      title: 'Advanced Machine Learning Approaches for Healthcare Prediction Systems',
      venue: 'IEEE International Conference on Machine Learning and Applications',
      type: 'Conference',
      citations: 12,
    },
    {
      year: '2023',
      title: 'IoT-Based Smart Home Automation with Energy Optimization',
      venue: 'International Journal of Computer Applications',
      type: 'Journal',
      citations: 8,
    },
    {
      year: '2023',
      title: 'Natural Language Processing for Sentiment Analysis in Social Media',
      venue: 'ACM Conference on Information and Knowledge Management',
      type: 'Conference',
      citations: 15,
    },
    {
      year: '2022',
      title: 'Deep Learning Architectures for Real-Time Object Detection in Autonomous Systems',
      venue: 'Journal of Artificial Intelligence Research',
      type: 'Journal',
      citations: 20,
    },
  ];

  return (
    <section
      id="publications"
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
            Research
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            Publications
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              & Papers
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-24"
        >
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold mb-2">4</p>
            <p className="text-gray-600">Publications</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold mb-2">55+</p>
            <p className="text-gray-600">Citations</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold mb-2">2</p>
            <p className="text-gray-600">Conferences</p>
          </div>
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-bold mb-2">2</p>
            <p className="text-gray-600">Journals</p>
          </div>
        </motion.div>

        {/* Publications List */}
        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="border-t border-gray-200 pt-8 hover:bg-gray-50 transition-all px-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl font-bold text-gray-400">
                        {pub.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        pub.type === 'Conference'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {pub.type}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-3">{pub.venue}</p>
                    <p className="text-sm text-gray-500">
                      {pub.citations} citations
                    </p>
                  </div>

                  {/* Link */}
                  <button className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                    <ExternalLink className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center border border-gray-200">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h3 className="text-3xl font-bold mb-4">Active Researcher</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Currently working on cutting-edge research in LLMs, Reinforcement Learning, 
              and AI Ethics. Open to collaboration and academic partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                Deep Learning
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                NLP
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                Computer Vision
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}