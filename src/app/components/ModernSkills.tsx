import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ModernSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      color: 'from-blue-600 to-blue-700',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'SQL', level: 85 },
        { name: 'R', level: 75 },
      ],
    },
    {
      title: 'Machine Learning & AI',
      color: 'from-purple-600 to-purple-700',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'NLP', level: 87 },
        { name: 'Computer Vision', level: 82 },
        { name: 'Deep Learning', level: 88 },
      ],
    },
    {
      title: 'Web Development',
      color: 'from-pink-600 to-pink-700',
      skills: [
        { name: 'React', level: 92 },
        { name: 'Node.js', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST APIs', level: 90 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Data Science & Analytics',
      color: 'from-cyan-600 to-cyan-700',
      skills: [
        { name: 'Pandas', level: 93 },
        { name: 'NumPy', level: 92 },
        { name: 'Matplotlib', level: 88 },
        { name: 'Statistical Analysis', level: 85 },
        { name: 'Data Visualization', level: 87 },
        { name: 'Big Data', level: 78 },
      ],
    },
    {
      title: 'Tools & Technologies',
      color: 'from-green-600 to-green-700',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 82 },
        { name: 'AWS', level: 78 },
        { name: 'Linux', level: 85 },
        { name: 'Jupyter', level: 93 },
        { name: 'VS Code', level: 95 },
      ],
    },
    {
      title: 'IoT & Embedded Systems',
      color: 'from-orange-600 to-orange-700',
      skills: [
        { name: 'Arduino', level: 88 },
        { name: 'Raspberry Pi', level: 85 },
        { name: 'MQTT', level: 82 },
        { name: 'Sensors', level: 87 },
        { name: 'Edge Computing', level: 78 },
        { name: 'IoT Protocols', level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(30deg, #f0f0f0 12%, transparent 12.5%, transparent 87%, #f0f0f0 87.5%, #f0f0f0),
                             linear-gradient(150deg, #f0f0f0 12%, transparent 12.5%, transparent 87%, #f0f0f0 87.5%, #f0f0f0),
                             linear-gradient(30deg, #f0f0f0 12%, transparent 12.5%, transparent 87%, #f0f0f0 87.5%, #f0f0f0),
                             linear-gradient(150deg, #f0f0f0 12%, transparent 12.5%, transparent 87%, #f0f0f0 87.5%, #f0f0f0)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
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
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {category.title.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
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
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Always exploring new technologies and expanding my skill set. Currently learning advanced topics in Reinforcement Learning and LLMs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30">
                🎯 Currently Learning: LLMs
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30">
                📚 Reading: AI Research Papers
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30">
                🔬 Exploring: Edge AI
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
