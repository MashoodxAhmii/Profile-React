import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="bg-gray-900 text-white py-8 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold tracking-wide text-green-400">Mashood Ahmed Memon</h1>
        <p className="text-sm sm:text-base text-gray-300">
          Frontend Developer | React & Tailwind Enthusiast
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
