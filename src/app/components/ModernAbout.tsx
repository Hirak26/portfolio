import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

export function ModernAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'MS in Computer Science',
      subtitle: 'Purdue University',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: '3+ Years Experience',
      subtitle: 'Data Science & ML',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Multiple Awards',
      subtitle: 'Research & Innovation',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '4 Publications',
      subtitle: 'IEEE & International Journals',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-50 to-transparent opacity-50" />

      <motion.div
        style={{ opacity, y }}
        className="relative container mx-auto px-6"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-20" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tl from-pink-600 to-blue-600 rounded-3xl opacity-20" />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA5OTAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hirak Modi"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Passionate about AI & Innovation
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a Master's student in Computer Science at Purdue University, specializing in 
              Data Science and Machine Learning. With a strong foundation in AI, deep learning, 
              and software engineering, I'm dedicated to creating innovative solutions that make 
              a real-world impact.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey began at Indus University where I earned my B.Tech in Computer Science, 
              graduating with honors. Since then, I've worked on diverse projects ranging from 
              IoT systems to advanced NLP applications, contributing to research that has been 
              published in prestigious international journals.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently based in the Chicago area, I'm actively involved in cutting-edge research 
              as a Graduate Research Assistant, exploring the frontiers of artificial intelligence 
              and its applications in real-world scenarios.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-5 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all cursor-default"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-3 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
