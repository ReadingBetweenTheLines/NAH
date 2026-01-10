import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Globe, Mic, X, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Features = () => {
  const [activeId, setActiveId] = useState(null);

  const features = [
    {
      id: 1,
      icon: GraduationCap,
      title: 'UTBK SNBT',
      shortTitle: 'UTBK',
      color: 'from-blue-500 to-cyan-500',
      description: 'Conquer Reading Comprehension.',
      details: {
        headline: 'Master the 7 Subtests',
        points: ['Literasi Bahasa Inggris', 'Penalaran Umum Logic', 'Pemahaman Bacaan', 'Weekly Simulations'],
        stats: '+150pts Avg'
      }
    },
    {
      id: 2,
      icon: Globe,
      title: 'TOEFL Prep',
      shortTitle: 'TOEFL',
      color: 'from-purple-500 to-pink-500',
      description: 'Structure, Listening, and Reading.',
      details: {
        headline: 'Score 550+ Guaranteed',
        points: ['Structure Hacks', 'Listening Drills', 'Reading Speed', 'Official Simulation'],
        stats: '92% Success'
      }
    },
    {
      id: 3,
      icon: Mic,
      title: 'Speaking',
      shortTitle: 'Speak',
      color: 'from-orange-500 to-red-500',
      description: 'Build natural reflexes.',
      details: {
        headline: 'No More "Umm" & "Ehh"',
        points: ['Shadowing Technique', 'Debate Logic', 'Interview Prep', 'Pronunciation Fix'],
        stats: '100% Boost'
      }
    },
  ];

  return (
    <section id="method" className="py-24 px-6 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div 
          animate={{ opacity: activeId ? 0 : 1, height: activeId ? 0 : 'auto', marginBottom: activeId ? 0 : 48 }}
          className="text-center overflow-hidden"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Choose Your <span className="gradient-text">Path</span>
          </h2>
          <p className="text-gray-400">Click a card to explore the curriculum.</p>
        </motion.div>

        <div className={`
          grid gap-4 transition-all duration-500 ease-in-out
          ${activeId ? 'grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 h-auto lg:h-[600px]' : 'grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 h-auto lg:h-[500px]'}
        `}>
          
          {features.map((feature) => {
            const isActive = activeId === feature.id;
            const isInactive = activeId !== null && !isActive;

            return (
              <motion.div
                key={feature.id}
                layout // Only the container animates layout size/position
                onClick={() => setActiveId(isActive ? null : feature.id)}
                className={`
                  relative overflow-hidden rounded-3xl cursor-pointer border border-white/10 p-8
                  flex flex-col transition-colors duration-500
                  ${isActive 
                    ? 'lg:col-span-3 lg:row-span-2 bg-[#0a0a0a]' 
                    : 'lg:col-span-1 lg:row-span-1 bg-white/5 hover:bg-white/10 justify-center items-center'
                  }
                `}
                style={{ order: isActive ? 1 : 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 35 }} // Smooth spring for container
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} transition-opacity duration-500 ${isActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-5'}`} />

                {/* --- SHARED ELEMENTS (Icon & Title) --- */}
                {/* We use layoutId to force Framer to treat these as the "same" object moving positions */}
                <div className={`relative z-10 w-full flex ${isActive ? 'flex-row justify-between items-start' : 'flex-col items-center'}`}>
                  
                  <div className={`flex ${isActive ? 'flex-row items-center gap-6' : 'flex-col items-center gap-4'}`}>
                    <motion.div 
                      layoutId={`icon-${feature.id}`} // Magic Link: Connects the icon across states
                      className={`rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg ${isActive ? 'w-14 h-14' : 'w-16 h-16'}`}
                    >
                      <feature.icon size={28} className="text-white" />
                    </motion.div>

                    <motion.h3 
                      layoutId={`title-${feature.id}`} // Magic Link: Connects the title across states
                      className={`${isActive ? 'text-3xl' : 'text-xl'} font-bold`}
                    >
                      {isActive ? feature.title : feature.shortTitle}
                    </motion.h3>
                  </div>

                  {/* Close Button (Fade In) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => { e.stopPropagation(); setActiveId(null); }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                      >
                        <X size={20} />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                {/* --- CONTENT SWITCHER --- */}
                {/* We separate the content completely so they don't try to morph into each other */}
                <div className="relative z-10 w-full h-full mt-6">
                  <AnimatePresence mode="popLayout"> {/* popLayout allows overlap during transition */}
                    
                    {isActive ? (
                      // === EXPANDED CONTENT ===
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }} // Fades out downward
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="flex flex-col h-full justify-between"
                      >
                         <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <p className="text-gray-400 mb-6 text-lg">{feature.description}</p>
                              <h4 className="text-2xl font-bold mb-4 gradient-text">{feature.details.headline}</h4>
                              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Impact</p>
                                <p className="text-2xl font-bold text-white">{feature.details.stats}</p>
                              </div>
                            </div>
                            <ul className="space-y-4">
                              {feature.details.points.map((point, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + (i * 0.1) }}
                                  className="flex items-center gap-3 text-gray-300"
                                >
                                  <CheckCircle size={20} className="text-blue-500 flex-shrink-0" />
                                  {point}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                            <button className={`px-8 py-3 rounded-full bg-gradient-to-r ${feature.color} text-white font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform`}>
                              Start This Track <ArrowRight size={20} />
                            </button>
                          </div>
                      </motion.div>
                    ) : (
                      // === COMPACT CONTENT (Inactive Hint) ===
                      isInactive && (
                        <motion.div
                          key="compact"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-center"
                        >
                          <span className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-widest">
                            Click to View
                          </span>
                        </motion.div>
                      )
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;