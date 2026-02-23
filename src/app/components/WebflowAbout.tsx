import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WebflowAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-white py-32 overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden"
            >
              <ImageWithFallback
                src="../src/assets/Hirak.png"
                alt="Hirak Modi"
                className="w-full h-full object-cover"
              />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Based in</p>
                    <p className="text-xl font-bold">Chicago Area</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30"
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            style={{ y: textY }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-gray-500 tracking-[0.3em] uppercase mb-4">
                About Me
              </p>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                Building the
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                I'm a Master's student in Computer Science at <strong>Purdue University</strong>, 
                specializing in Data Science and Machine Learning. My passion lies in creating 
                intelligent systems that solve real-world problems.
              </p>
              <p>
                With a strong foundation from my B.Tech at <strong>Indus University</strong>, I've 
                worked across diverse domains—from IoT systems to advanced NLP applications—contributing 
                to research published in prestigious international journals.
              </p>
              <p>
                Currently, I'm pushing the boundaries of AI as a Graduate Research Assistant, 
                exploring cutting-edge technologies and their applications in transforming industries.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-4xl font-bold text-black mb-2">3+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">6+</p>
                <p className="text-sm text-gray-600">Major Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">4</p>
                <p className="text-sm text-gray-600">Publications</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}