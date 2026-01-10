import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const words = ['NAH', 'NOPE', 'NEVER'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Abstract 3D Shape / Waveform Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-96 h-96"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <motion.path
              d="M200,50 Q100,150 200,200 T200,350"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-bold mb-6 tracking-tight"
        >
          Is English Hard?{' '}
          <motion.span
            key={currentWord}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="gradient-text inline-block"
          >
            {words[currentWord]}.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 font-light tracking-wide"
        >
          Stop translating. Start talking.
          <br />
          <span className="text-white font-medium">The elite speaking program for the hesitant.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-linear-to-r from-[#2563EB] to-[#F97316] text-white font-semibold text-lg shadow-xl"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
