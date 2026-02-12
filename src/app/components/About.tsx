import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="text-xl font-semibold text-blue-300 mb-2">
                  Master of Science | Computer Science
                </h4>
                <p className="text-gray-300 font-medium mb-1">Purdue University</p>
                <p className="text-gray-400 text-sm mb-1">GPA: 3.8</p>
                <p className="text-gray-500 text-sm">AUG 2024 - MAY 2026 (Expected)</p>
              </div>

              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold text-purple-300 mb-2">
                  Bachelor of Technology | Computer Science & Engineering
                </h4>
                <p className="text-gray-300 font-medium mb-1">Indus University | Ahmedabad</p>
                <p className="text-gray-400 text-sm mb-1">CGPA: 9.56/10</p>
                <p className="text-gray-500 text-sm">JUL 2020 - MAY 2024</p>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Currently pursuing a Master's in Computer Science at Purdue University with a 3.8 GPA, 
                I am a passionate data scientist and machine learning engineer specializing in 
                time-series analysis, anomaly detection, and cybersecurity applications.
              </p>
              <p>
                As a Graduate Research Assistant at Purdue, I design automated time-series monitoring 
                systems for distributed sensor data in cyber-physical systems, developing machine 
                learning models for prediction and anomaly detection.
              </p>
              <p>
                With experience spanning backend development, IoT engineering, and web development, 
                I bring a comprehensive skill set including Python, Node.js, machine learning frameworks, 
                and cloud technologies (AWS Lambda, S3, API Gateway).
              </p>
              <p className="text-blue-400 font-semibold">
                Published 4 research papers in machine learning, AR/VR, and NLP
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
