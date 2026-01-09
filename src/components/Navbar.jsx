import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <div className="glass rounded-full px-8 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tight"
        >
          NAH.
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <motion.a
            href="#method"
            whileHover={{ y: -2 }}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Method
          </motion.a>
          <motion.a
            href="#pricing"
            whileHover={{ y: -2 }}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            About
          </motion.a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#F97316] text-white font-semibold text-sm flex items-center gap-2 shadow-lg"
        >
          <BookOpen size={16} />
          Book Audit
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
