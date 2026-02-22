import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function ModernExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      role: 'Graduate Research Assistant',
      company: 'Purdue University',
      location: 'West Lafayette, IN',
      period: '2024 - Present',
      description: 'Conducting advanced research in machine learning and AI applications. Working on cutting-edge projects involving deep learning, natural language processing, and data analytics.',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'Research'],
      color: 'from-blue-600 to-blue-700',
    },
    {
      role: 'Backend Development Intern',
      company: 'Tech Company',
      location: 'Remote',
      period: '2023 - 2024',
      description: 'Developed and maintained scalable backend systems. Implemented RESTful APIs, optimized database queries, and integrated machine learning models into production environments.',
      skills: ['Node.js', 'Python', 'MongoDB', 'API Development'],
      color: 'from-purple-600 to-purple-700',
    },
    {
      role: 'IoT Development Intern',
      company: 'IoT Solutions Inc.',
      location: 'India',
      period: '2022 - 2023',
      description: 'Designed and implemented IoT systems for smart home and industrial applications. Worked with embedded systems, sensors, and cloud platforms for data collection and analysis.',
      skills: ['IoT', 'Arduino', 'MQTT', 'Cloud Integration'],
      color: 'from-pink-600 to-pink-700',
    },
    {
      role: 'Web Development Intern',
      company: 'Digital Agency',
      location: 'India',
      period: '2021 - 2022',
      description: 'Built responsive web applications using modern frameworks. Collaborated with designers and backend developers to deliver high-quality user experiences.',
      skills: ['React', 'JavaScript', 'CSS', 'UI/UX'],
      color: 'from-cyan-600 to-cyan-700',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
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
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Building innovative solutions across different domains
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-300 to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  <Briefcase size={28} />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:border-blue-200">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-purple-600">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-10 text-center">
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Purdue */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Master of Science
              </h4>
              <p className="text-lg font-semibold text-blue-600 mb-2">
                Purdue University
              </p>
              <p className="text-gray-600 mb-4">Computer Science</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar size={16} />
                <span>2024 - 2026 (Expected)</span>
              </div>
            </div>

            {/* Indus University */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-purple-200 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Bachelor of Technology
              </h4>
              <p className="text-lg font-semibold text-purple-600 mb-2">
                Indus University
              </p>
              <p className="text-gray-600 mb-4">Computer Science Engineering</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar size={16} />
                <span>2020 - 2024</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
