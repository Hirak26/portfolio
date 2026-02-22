import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function WebflowSkills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: horizontalProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(horizontalProgress, [0, 1], [0, -500]);

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'R'],
    },
    {
      title: 'ML/AI',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'Deep Learning'],
    },
    {
      title: 'Web',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs', 'Next.js'],
    },
    {
      title: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Statistics', 'Data Viz', 'Big Data'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Jupyter', 'VS Code'],
    },
    {
      title: 'IoT',
      skills: ['Arduino', 'Raspberry Pi', 'MQTT', 'Sensors', 'Edge Computing', 'Protocols'],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-black text-white py-32 overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 max-w-7xl mx-auto"
        >
          <p className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-6">
            Expertise
          </p>
          <h2 className="text-6xl md:text-8xl font-bold leading-tight">
            Technical
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div ref={containerRef} className="max-w-7xl mx-auto" style={{ position: 'relative' }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all h-full">
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-xl text-gray-400 mb-6">
              Always exploring new technologies. Currently diving deep into LLMs, 
              Reinforcement Learning, and AI Ethics.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-6 py-3 bg-white/10 border border-white/20 rounded-full">
                🎯 Learning: LLMs
              </span>
              <span className="px-6 py-3 bg-white/10 border border-white/20 rounded-full">
                📚 Reading: AI Research
              </span>
              <span className="px-6 py-3 bg-white/10 border border-white/20 rounded-full">
                🔬 Exploring: Edge AI
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}