import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { BookOpen, ExternalLink, Award } from 'lucide-react';

export function ModernPublications() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const publications = [
    {
      title: 'Advanced Machine Learning Approaches for Healthcare Prediction Systems',
      authors: 'H. Modi, et al.',
      venue: 'IEEE International Conference on Machine Learning and Applications',
      year: '2024',
      type: 'Conference',
      citations: 12,
      link: '#',
      description: 'Novel ensemble methods for predicting patient outcomes using electronic health records with 95% accuracy.',
    },
    {
      title: 'IoT-Based Smart Home Automation with Energy Optimization',
      authors: 'H. Modi, R. Patel, A. Shah',
      venue: 'International Journal of Computer Applications',
      year: '2023',
      type: 'Journal',
      citations: 8,
      link: '#',
      description: 'Comprehensive IoT framework achieving 30% energy savings through intelligent automation and ML-driven optimization.',
    },
    {
      title: 'Natural Language Processing for Sentiment Analysis in Social Media',
      authors: 'H. Modi, K. Singh',
      venue: 'ACM Conference on Information and Knowledge Management',
      year: '2023',
      type: 'Conference',
      citations: 15,
      link: '#',
      description: 'Transformer-based approach for real-time sentiment analysis with multi-lingual support and 92% accuracy.',
    },
    {
      title: 'Deep Learning Architectures for Real-Time Object Detection in Autonomous Systems',
      authors: 'H. Modi, P. Kumar, M. Sharma',
      venue: 'Journal of Artificial Intelligence Research',
      year: '2022',
      type: 'Journal',
      citations: 20,
      link: '#',
      description: 'Lightweight CNN architecture optimized for edge devices, achieving 60 FPS with 88% mAP on standard datasets.',
    },
  ];

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ opacity }} className="relative container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Research & Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Contributing to the advancement of AI and computer science research
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-center text-white shadow-lg">
            <div className="text-4xl font-bold mb-2">4</div>
            <div className="text-blue-100 text-sm font-medium">Publications</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-center text-white shadow-lg">
            <div className="text-4xl font-bold mb-2">55+</div>
            <div className="text-purple-100 text-sm font-medium">Citations</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-center text-white shadow-lg">
            <div className="text-4xl font-bold mb-2">2</div>
            <div className="text-pink-100 text-sm font-medium">Conferences</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-center text-white shadow-lg">
            <div className="text-4xl font-bold mb-2">2</div>
            <div className="text-cyan-100 text-sm font-medium">Journals</div>
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
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl ${
                    pub.type === 'Conference'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700'
                  } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {pub.type === 'Conference' ? (
                      <Award size={28} />
                    ) : (
                      <BookOpen size={28} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {pub.title}
                  </h3>

                  {/* Authors & Venue */}
                  <div className="mb-3 space-y-1">
                    <p className="text-gray-600">
                      <span className="font-medium">{pub.authors}</span>
                    </p>
                    <p className="text-blue-600 font-medium">
                      {pub.venue} • {pub.year}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      pub.type === 'Conference'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                      {pub.citations} Citations
                    </span>
                    <a
                      href={pub.link}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Paper
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-10 border border-gray-200">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Active Researcher
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Currently working on multiple research projects in the areas of Large Language Models, 
              Reinforcement Learning, and AI Ethics. Open to collaboration opportunities and 
              academic partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium border border-blue-200">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-white text-purple-600 rounded-full text-sm font-medium border border-purple-200">
                Deep Learning
              </span>
              <span className="px-4 py-2 bg-white text-pink-600 rounded-full text-sm font-medium border border-pink-200">
                NLP
              </span>
              <span className="px-4 py-2 bg-white text-cyan-600 rounded-full text-sm font-medium border border-cyan-200">
                Computer Vision
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
