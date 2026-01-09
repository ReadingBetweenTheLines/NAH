import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold mb-12 tracking-tight"
        >
          Ready to <span className="gradient-text">speak?</span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-6 rounded-full bg-gradient-to-r from-[#2563EB] to-[#F97316] text-white font-bold text-xl flex items-center gap-3 mx-auto shadow-2xl"
        >
          Let's Go
          <ArrowRight size={24} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm">
            © 2024 NAH. No Awkward Hesitation. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
