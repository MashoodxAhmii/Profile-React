import React from 'react';
import profile from '../assets/profile.webp';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="max-w-3xl mx-auto my-10 px-6 py-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Profile Picture with Grainy Green Hover Effect */}
      <div className="relative w-36 h-36 mx-auto mb-6 rounded-full p-1 shadow-lg ring-4 ring-green-500/70 overflow-hidden group">
        {/* Grain background */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-green-600 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] mix-blend-overlay transition-opacity duration-500 z-0"></div>

        <img
          src={profile}
          alt="Mashood"
          className="relative w-full h-full object-cover rounded-full border-4 border-white z-10"
        />
      </div>

      {/* About Text */}
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
        About Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto">
        I'm a passionate frontend developer with a love for crafting responsive, beautiful, and functional web interfaces.
        I specialize in building React applications styled with Tailwind CSS, focusing on performance and great user experience.
      </p>
    </motion.section>
  );
};

export default About;
