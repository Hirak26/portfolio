import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
import profileImage from '../../assets/Hirak.png';

export function AboutChicago() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Chicago Street Lines - Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -skew-y-2" />
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent transform skew-y-2" />
        <div className="absolute top-2/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -skew-y-2" />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Meet Hirak
          </h2>
          <div className="flex items-center justify-center gap-2 text-blue-400 text-xl">
            <MapPin className="w-6 h-6" />
            <span>Chicago, IL</span>
          </div>
        </motion.div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section - Your Chicago Photo */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500/20 group-hover:border-blue-500/40 transition-all transform group-hover:scale-105 duration-500">
                <img 
                  src={profileImage} 
                  alt="Hirak Modi in Chicago"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Location badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md border border-blue-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-300 font-semibold">Chicago, Illinois</p>
                      <p className="text-gray-400 text-sm">The Windy City</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Info Section */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all hover:scale-105 transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">The Journey</h3>
              </div>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  From the streets of Ahmedabad to the vibrant city of Chicago, my journey in 
                  data science and machine learning has been one of constant exploration and innovation.
                </p>
                <p>
                  Currently pursuing my Master's at <span className="text-blue-400 font-semibold">Purdue University</span> with 
                  a stellar 3.8 GPA, I'm passionate about building intelligent systems that make a real-world impact.
                </p>
                <p className="text-blue-300 font-semibold">
                  🎯 4 Published Research Papers | 🏆 5+ Hackathon Wins
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all hover:scale-105 transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-600 rounded-xl">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-2xl font-bold text-blue-300 mb-2">
                    Master of Science
                  </h4>
                  <p className="text-xl text-gray-300 font-medium mb-1">Computer Science</p>
                  <p className="text-gray-400 mb-1">Purdue University</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300">GPA: 3.8</span>
                    <span className="text-gray-500">2024 - 2026</span>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-2xl font-bold text-purple-300 mb-2">
                    Bachelor of Technology
                  </h4>
                  <p className="text-xl text-gray-300 font-medium mb-1">Computer Science & Engineering</p>
                  <p className="text-gray-400 mb-1">Indus University, Ahmedabad</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-3 py-1 bg-purple-600/30 rounded-full text-purple-300">CGPA: 9.56/10</span>
                    <span className="text-gray-500">2020 - 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar - Chicago Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "4+", label: "Research Papers", icon: "📄" },
            { number: "15+", label: "Tech Skills", icon: "💻" },
            { number: "3.8", label: "GPA", icon: "🎓" },
            { number: "6+", label: "Major Projects", icon: "🚀" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-blue-500/20 text-center hover:border-blue-500/40 transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}