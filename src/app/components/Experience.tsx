import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Code, Database, Cpu } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'Graduate Research Assistant',
    company: 'Purdue University',
    period: 'SEP 2025 - PRESENT',
    color: 'blue',
    points: [
      'Designed automated time-series monitoring systems for distributed sensor data in a cyber-physical system',
      'Developed machine learning-based prediction and anomaly detection models to identify abnormal behavior and operational risk',
      'Built reproducible data pipelines for ingestion, preprocessing, feature engineering, and model evaluation',
      'Applied security-aware system design including validation, access control, logging, and risk-based monitoring'
    ]
  },
  {
    icon: Database,
    title: 'Backend Development Intern',
    company: 'DataVizz',
    period: 'JUL 2023 - SEP 2023',
    color: 'purple',
    points: [
      'Developed and maintained backend services for a cloud-based web application using Node.js',
      'Designed and integrated RESTful APIs to support application functionality and client-server communication',
      'Implemented serverless workflows using AWS Lambda, API Gateway, and S3',
      'Collaborated on cloud deployment and integration, ensuring scalability and reliability'
    ]
  },
  {
    icon: Cpu,
    title: 'IoT Engineering Intern',
    company: 'Anant Electronics',
    period: 'JAN 2023 - JUN 2023',
    color: 'green',
    points: [
      'Developed multiple embedded systems using Arduino, NodeMCU, and Raspberry Pi',
      'Created a web application to control embedded systems using NodeMCU'
    ]
  },
  {
    icon: Code,
    title: 'Web Development Intern',
    company: 'I.M.A. Defence Academy',
    period: 'JUL 2022 - SEP 2022',
    color: 'orange',
    points: [
      'Developed a portal using MERN Stack for online tutoring sessions',
      'Created the whole user interface (UI) of the "Doubt Solve" application using Figma'
    ]
  }
];

const colorVariants: Record<string, { bg: string; border: string; icon: string; text: string }> = {
  blue: { bg: 'from-blue-900/30', border: 'border-blue-500/20 hover:border-blue-500/40', icon: 'bg-blue-600', text: 'text-blue-300' },
  purple: { bg: 'from-purple-900/30', border: 'border-purple-500/20 hover:border-purple-500/40', icon: 'bg-purple-600', text: 'text-purple-300' },
  green: { bg: 'from-green-900/30', border: 'border-green-500/20 hover:border-green-500/40', icon: 'bg-green-600', text: 'text-green-300' },
  orange: { bg: 'from-orange-900/30', border: 'border-orange-500/20 hover:border-orange-500/40', icon: 'bg-orange-600', text: 'text-orange-300' }
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = colorVariants[exp.color];
            const Icon = exp.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${colors.bg} to-slate-900/30 p-8 rounded-xl border ${colors.border} backdrop-blur-sm transition-all`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${colors.icon} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${colors.text}`}>{exp.title}</h3>
                      <p className="text-gray-300 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">{exp.period}</div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
