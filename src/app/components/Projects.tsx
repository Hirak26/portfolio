import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, FileText, Lock, Gamepad2, DollarSign } from 'lucide-react';

const projects = [
  {
    icon: TrendingUp,
    title: 'Multivariate Time-Series Anomaly Detection',
    tech: 'Python, Pandas, NumPy, scikit-learn, Statistical Analysis',
    color: 'blue',
    points: [
      'Conducted exploratory data analysis (EDA) on large multivariate time-series datasets to identify trends, seasonality, correlations, and regime changes',
      'Performed feature engineering using lag variables, rolling statistics, trend/seasonal decomposition, and normalization techniques',
      'Applied statistical and ML-assisted anomaly detection methods (z-score baselines, Isolation Forest) to identify abnormal seasonal patterns',
      'Evaluated detection performance using precision, recall, and false-positive analysis with time-based cross-validation',
      'Produced data-driven insights to support monitoring and early-warning analysis'
    ]
  },
  {
    icon: FileText,
    title: 'Text Analytics and Topic Modeling for Unstructured Data',
    tech: 'Python, SQL, NLP, Data Science',
    color: 'purple',
    points: [
      'Collected and cleaned large unstructured text datasets from multiple sources using SQL and Python-based preprocessing pipelines',
      'Performed exploratory text analysis including tokenization, n-grams, frequency analysis, and vocabulary statistics',
      'Applied topic modeling techniques (Latent Dirichlet Allocation, TF-IDF + NMF) to uncover latent themes and patterns in text data',
      'Evaluated topic coherence and interpretability using statistical metrics and manual validation',
      'Translated analytical results into interpretable insights for downstream analysis and reporting'
    ]
  },
  {
    icon: Lock,
    title: 'Door Lock System',
    tech: 'Cloud, IoT, NodeMCU, C++',
    color: 'green',
    points: [
      'Used Azure Cloud for storing the data of the door lock system',
      'Used NodeMCU for controlling access virtually through a website'
    ]
  },
  {
    icon: Gamepad2,
    title: 'Virtual Screen Controller',
    tech: 'Arduino IDE, Processing IDE, Python, Hardware',
    color: 'orange',
    points: [
      'Created a device that can control a computer\'s screen virtually using hand gestures',
      'Used Arduino IDE for programming sensors and Processing IDE for creating various animations for interaction',
      'Used sensors like the HC05 Bluetooth Module, Hall Sensor, etc.'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Sports Management Website',
    tech: 'React.js, MongoDB, Agile',
    color: 'pink',
    points: [
      'Applied agile methodology',
      'Applied STT and TTS using React.js',
      'Developed and managed a central database using MongoDB'
    ]
  },
  {
    icon: DollarSign,
    title: 'Currency Price Prediction',
    tech: 'Machine Learning, Python, Data Science',
    color: 'yellow',
    points: [
      'Applied Decision-Making Tree Algorithm to Predict the Value of Currency',
      'Used Kaggle as the data source and applied feature extraction methods to find correlations among the data',
      'Used libraries like Matplotlib and Seaborn for visualizing the output of the model'
    ]
  }
];

const colorVariants: Record<string, { bg: string; border: string; icon: string; text: string }> = {
  blue: { bg: 'from-blue-900/20', border: 'border-blue-500/20 hover:border-blue-500/50', icon: 'bg-blue-600', text: 'text-blue-300' },
  purple: { bg: 'from-purple-900/20', border: 'border-purple-500/20 hover:border-purple-500/50', icon: 'bg-purple-600', text: 'text-purple-300' },
  green: { bg: 'from-green-900/20', border: 'border-green-500/20 hover:border-green-500/50', icon: 'bg-green-600', text: 'text-green-300' },
  orange: { bg: 'from-orange-900/20', border: 'border-orange-500/20 hover:border-orange-500/50', icon: 'bg-orange-600', text: 'text-orange-300' },
  pink: { bg: 'from-pink-900/20', border: 'border-pink-500/20 hover:border-pink-500/50', icon: 'bg-pink-600', text: 'text-pink-300' },
  yellow: { bg: 'from-yellow-900/20', border: 'border-yellow-500/20 hover:border-yellow-500/50', icon: 'bg-yellow-600', text: 'text-yellow-300' }
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const colors = colorVariants[project.color];
            const Icon = project.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${colors.bg} to-slate-900/40 p-6 rounded-xl border ${colors.border} backdrop-blur-sm transition-all hover:scale-105`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${colors.icon} rounded-lg flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{project.title}</h3>
                    <p className="text-sm text-gray-400 font-mono mb-3">{project.tech}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
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