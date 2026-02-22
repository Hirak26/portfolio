import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Utilizing Machine Learning for Enhanced Security System Through Voice Recognition',
    journal: 'ISSN-2349-5162',
    color: 'blue'
  },
  {
    title: 'Machine Learning Applications for Augmented Reality and Virtual Reality in Wearable Goods',
    journal: 'ISSN-4950-6005',
    color: 'purple'
  },
  {
    title: 'Using Machine Learning to Recognize Emotions Conveyed Through Speech',
    journal: '',
    color: 'green'
  },
  {
    title: 'Neural Machine Translation for Under-Represented Indian Languages',
    journal: 'Review paper',
    color: 'orange'
  }
];

const colorVariants: Record<string, { bg: string; border: string; icon: string }> = {
  blue: { bg: 'from-blue-900/20', border: 'border-blue-500/20 hover:border-blue-500/50', icon: 'bg-blue-600' },
  purple: { bg: 'from-purple-900/20', border: 'border-purple-500/20 hover:border-purple-500/50', icon: 'bg-purple-600' },
  green: { bg: 'from-green-900/20', border: 'border-green-500/20 hover:border-green-500/50', icon: 'bg-green-600' },
  orange: { bg: 'from-orange-900/20', border: 'border-orange-500/20 hover:border-orange-500/50', icon: 'bg-orange-600' }
};

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
        >
          Publications
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Research contributions in machine learning, security systems, AR/VR applications, and NLP
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => {
            const colors = colorVariants[pub.color];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-gradient-to-br ${colors.bg} to-slate-800/40 p-6 rounded-xl border ${colors.border} backdrop-blur-sm transition-all hover:scale-105 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${colors.icon} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {pub.title}
                    </h3>
                    {pub.journal && (
                      <p className="text-sm text-gray-400 font-mono">{pub.journal}</p>
                    )}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}