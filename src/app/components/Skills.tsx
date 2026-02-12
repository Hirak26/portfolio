import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Wrench, Globe } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Technologies',
    color: 'blue',
    skills: [
      'Python', 'SQL', 'R', 'Julia', 'C++', 'JavaScript', 'Pandas', 'NumPy',
      'scikit-learn', 'Statsmodels', 'NLTK', 'spaCy', 'MySQL', 'MongoDB',
      'HTML', 'CSS', 'LaTeX'
    ]
  },
  {
    icon: Wrench,
    title: 'Tools',
    color: 'purple',
    skills: [
      'Jupyter Notebook', 'Git', 'Docker', 'AWS', 'MS Excel', 'Power BI',
      'Tableau', 'Google Colab', 'JIRA', 'Figma'
    ]
  },
  {
    icon: Globe,
    title: 'Languages',
    color: 'green',
    skills: [
      'English', 'Hindi', 'Gujarati', 'Spanish (Low Intermediate)'
    ]
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClass = category.color === 'blue' ? 'from-blue-900/30 border-blue-500/20 hover:border-blue-500/40' :
                              category.color === 'purple' ? 'from-purple-900/30 border-purple-500/20 hover:border-purple-500/40' :
                              'from-green-900/30 border-green-500/20 hover:border-green-500/40';
            const iconBg = category.color === 'blue' ? 'bg-blue-600' :
                          category.color === 'purple' ? 'bg-purple-600' :
                          'bg-green-600';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${colorClass} to-slate-900/30 p-6 rounded-xl border backdrop-blur-sm transition-all`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${iconBg} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                      className="px-3 py-1.5 bg-slate-800/60 border border-slate-700 rounded-lg text-sm text-gray-300 hover:bg-slate-700/60 hover:border-blue-500/40 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications and Awards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-8 rounded-xl border border-yellow-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Certifications & Awards</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-semibold">Finalist Smart India Hackathon (SIH) 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-semibold">MINeDHackathon of Nirma and Binghamton University 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-semibold">Tinkerthon Hackathon at Navrachana University 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-semibold">Finalist of SSIP Hackathon Gujarat 2022</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-semibold">Winner Imagination Hunt Hackathon at Indus University 2021</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-semibold">AWS Academy Cloud Foundation Certification Course</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Extracurricular */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-xl border border-purple-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Extracurricular Activities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200">Cadet at National Cadets Corps | Ahmedabad</p>
                <p className="text-gray-400 text-sm">April 2020 - March 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200">Technical Head at CESA (Computer Engineering Student Association)</p>
                <p className="text-gray-400 text-sm">SEP 2022 - AUG 2023</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200">Technical Coordinator at CESA</p>
                <p className="text-gray-400 text-sm">AUG 2021 - SEP 2022</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-200">Member of Rotaract club of Indus University</p>
                <p className="text-gray-400 text-sm">JAN 2022 - JUN 2022</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}