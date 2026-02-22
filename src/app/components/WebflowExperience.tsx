import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function WebflowExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const experiences = [
    {
      year: '2024',
      role: 'Graduate Research Assistant',
      company: 'Purdue University',
      description: 'Leading advanced research in machine learning and AI. Developing novel algorithms for deep learning applications.',
    },
    {
      year: '2023',
      role: 'Backend Development Intern',
      company: 'Tech Company',
      description: 'Built scalable backend systems and integrated ML models into production environments.',
    },
    {
      year: '2022',
      role: 'IoT Development Intern',
      company: 'IoT Solutions Inc.',
      description: 'Designed intelligent IoT systems with cloud integration for industrial applications.',
    },
    {
      year: '2021',
      role: 'Web Development Intern',
      company: 'Digital Agency',
      description: 'Created responsive web applications using modern frameworks and best practices.',
    },
  ];

  const education = [
    {
      year: '2024 - 2026',
      degree: 'Master of Science',
      school: 'Purdue University',
      field: 'Computer Science',
    },
    {
      year: '2020 - 2024',
      degree: 'Bachelor of Technology',
      school: 'Indus University',
      field: 'Computer Science Engineering',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white py-32 overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Title */}
        <motion.div
          style={{ y }}
          className="mb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-6"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            Work
            <br />
            History
          </motion.h2>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl ml-auto space-y-16 mb-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Year */}
                <div className="md:col-span-2">
                  <p className="text-5xl font-bold text-gray-700 group-hover:text-white transition-colors">
                    {exp.year}
                  </p>
                </div>

                {/* Content */}
                <div className="md:col-span-10 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-gray-400">{exp.company}</p>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < experiences.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-gray-800 via-gray-700 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-6">
              Education
            </p>
            <h2 className="text-6xl md:text-8xl font-bold leading-tight">
              Academic
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all"
              >
                <p className="text-sm text-gray-500 mb-4">{edu.year}</p>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-400 mb-2">{edu.school}</p>
                <p className="text-gray-500">{edu.field}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}