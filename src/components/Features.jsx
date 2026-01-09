import { motion } from 'framer-motion';
import { Brain, Pause, MicOff } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'The Translator',
      description: 'Constantly converting thoughts from your native language. Every sentence is a mental workout.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Pause,
      title: 'The Freezer',
      description: 'Mind goes blank mid-conversation. The perfect word exists, but it\'s locked away.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MicOff,
      title: 'The Apologizer',
      description: '"Sorry, my English isn\'t good." You say it so often it\'s become your default.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="method" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight"
        >
          Which One Are <span className="gradient-text">You?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              className="glass rounded-3xl p-8 cursor-pointer group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon size={32} className="text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
