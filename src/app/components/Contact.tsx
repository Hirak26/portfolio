import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hirak.modi2025@gmail.com',
      link: 'mailto:hirak.modi2025@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (219) 368-2153',
      link: 'tel:+12193682153',
      color: 'green'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Hirak26',
      link: 'https://github.com/Hirak26',
      color: 'purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Hirak Modi',
      link: 'https://www.linkedin.com/in/hirak-modi-6a08181b4/',
      color: 'blue'
    }
  ];

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            const colorClass = contact.color === 'blue' ? 'from-blue-900/20 border-blue-500/20 hover:border-blue-500/50 bg-blue-600' :
                              contact.color === 'green' ? 'from-green-900/20 border-green-500/20 hover:border-green-500/50 bg-green-600' :
                              'from-purple-900/20 border-purple-500/20 hover:border-purple-500/50 bg-purple-600';
            const [bgClass, borderClass, iconBg] = colorClass.split(' ');
            
            return (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${bgClass} to-slate-900/40 p-6 rounded-xl border ${borderClass} backdrop-blur-sm transition-all hover:scale-105 group`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-4 ${iconBg} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                    <p className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-500/20 backdrop-blur-sm">
            <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <p className="text-gray-300 text-lg">Currently based in</p>
            <p className="text-white font-bold text-2xl mt-1">Griffith, IN</p>
            <p className="text-gray-400 mt-2">Purdue University</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-slate-700 text-center"
        >
          <p className="text-gray-400">
            © 2026 Hirak Modi. Built with React, Three.js, and Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}