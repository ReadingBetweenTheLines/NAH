import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroReveal = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Reveal Animation: 0% -> 150% circle expansion
  const clipPath = useTransform(scrollYProgress, [0, 1], [
    "circle(0% at 50% 50%)", 
    "circle(150% at 50% 50%)"
  ]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#0a0a0a]">
      
      {/* Sticky Wrapper */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">

        {/* --- LAYER 1: THE BACKGROUND (Is English Hard?) --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111] z-0">
          <div className="text-center px-4 relative z-10 flex flex-col items-center">
            
            {/* "Is English" */}
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 tracking-tighter mb-2">
              Is English
            </h1>
            
            {/* "Hard?" - Fixed spacing so it is not blocked */}
            <div className="relative py-4"> {/* Added padding-y to prevent cutting off */}
              <span className="block text-7xl md:text-9xl font-bold text-gray-600 tracking-tighter leading-tight">
                Hard?
              </span>
            </div>

            <p className="mt-16 text-gray-500 font-mono text-sm uppercase tracking-widest animate-pulse">
              ↓ Scroll for the answer
            </p>
          </div>
        </div>

        {/* --- LAYER 2: THE REVEAL (NAH.) --- */}
        <motion.div 
          style={{ clipPath }} 
          className="absolute inset-0 z-20 bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-[#0a0a0a]" />
          
          <div className="relative z-30 text-center max-w-5xl px-6">
            <motion.h1 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className="text-[10rem] md:text-[16rem] font-bold mb-0 tracking-tighter leading-none text-white"
            >
              NAH<span className="text-[#F97316]">.</span>
            </motion.h1>
            
            <p className="text-2xl md:text-4xl text-gray-300 font-light mb-12">
              Stop translating. <span className="text-[#2563EB] font-bold">Start talking.</span>
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 rounded-full bg-white text-black font-bold text-xl shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_70px_rgba(255,255,255,0.5)] transition-shadow cursor-pointer"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroReveal;