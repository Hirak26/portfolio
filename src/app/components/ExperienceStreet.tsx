import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Code, Database, Cpu, ArrowRight } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Graduate Research Assistant',
    company: 'Purdue University',
    location: 'West Lafayette, IN',
    period: 'SEP 2025 - PRESENT',
    color: 'blue',
    points: [
      'Designed automated time-series monitoring systems for distributed sensor data',
      'Developed ML-based prediction and anomaly detection models',
      'Built reproducible data pipelines for ingestion and preprocessing',
      'Applied security-aware system design with access control and logging'
    ]
  },
  {
    icon: Database,
    title: 'Backend Development Intern',
    company: 'DataVizz',
    location: 'Remote',
    period: 'JUL 2023 - SEP 2023',
    color: 'purple',
    points: [
      'Developed backend services using Node.js for cloud applications',
      'Designed and integrated RESTful APIs for client-server communication',
      'Implemented serverless workflows using AWS Lambda and API Gateway',
      'Ensured scalability and reliability in cloud deployment'
    ]
  },
  {
    icon: Cpu,
    title: 'IoT Engineering Intern',
    company: 'Anant Electronics',
    location: 'Ahmedabad, India',
    period: 'JAN 2023 - JUN 2023',
    color: 'green',
    points: [
      'Developed embedded systems using Arduino and Raspberry Pi',
      'Created web applications to control IoT devices',
      'Integrated NodeMCU for wireless communication'
    ]
  },
  {
    icon: Code,
    title: 'Web Development Intern',
    company: 'I.M.A. Defence Academy',
    location: 'Ahmedabad, India',
    period: 'JUL 2022 - SEP 2022',
    color: 'orange',
    points: [
      'Developed MERN Stack portal for online tutoring',
      'Created complete UI/UX for "Doubt Solve" application using Figma',
      'Implemented real-time features for student-teacher interaction'
    ]
  }
];

export function ExperienceStreet() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Street Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #3b82f6 1px, transparent 1px),
            linear-gradient(0deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Career Journey
          </h2>
          <p className="text-xl text-gray-400">Walking through my professional path</p>
        </motion.div>

        {/* Timeline Street */}
        <div className="relative">
          {/* Central line - like a street */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;
              
              const colors = {
                blue: { 
                  bg: 'from-blue-900/40 to-blue-800/20', 
                  border: 'border-blue-500/30 hover:border-blue-500/60', 
                  icon: 'bg-blue-600',
                  glow: 'shadow-blue-500/50'
                },
                purple: { 
                  bg: 'from-purple-900/40 to-purple-800/20', 
                  border: 'border-purple-500/30 hover:border-purple-500/60', 
                  icon: 'bg-purple-600',
                  glow: 'shadow-purple-500/50'
                },
                green: { 
                  bg: 'from-green-900/40 to-green-800/20', 
                  border: 'border-green-500/30 hover:border-green-500/60', 
                  icon: 'bg-green-600',
                  glow: 'shadow-green-500/50'
                },
                orange: { 
                  bg: 'from-orange-900/40 to-orange-800/20', 
                  border: 'border-orange-500/30 hover:border-orange-500/60', 
                  icon: 'bg-orange-600',
                  glow: 'shadow-orange-500/50'
                }
              };

              const color = colors[exp.color as keyof typeof colors];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    isLeft ? 'md:text-right' : ''
                  }`}
                >
                  {/* Icon in center */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 ${color.icon} rounded-2xl shadow-2xl ${color.glow} z-10 border-4 border-slate-900`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content Card */}
                  <div className={isLeft ? 'md:col-start-1' : 'md:col-start-2'}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className={`bg-gradient-to-br ${color.bg} p-8 rounded-2xl border-2 ${color.border} backdrop-blur-md transition-all hover:shadow-2xl ${color.glow}`}
                    >
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-xl text-blue-300 font-semibold mb-1">{exp.company}</p>
                        <div className="flex items-center gap-4 text-gray-400 text-sm flex-wrap">
                          <span className="flex items-center gap-1">
                            📍 {exp.location}
                          </span>
                          <span className="font-mono">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={isLeft ? 'md:col-start-2' : 'md:col-start-1'} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/50">
            <div className="text-4xl">🎯</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}