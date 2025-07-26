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
{/* Profile Picture with Clean Professional Ring */}
<div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gray-800 p-1 shadow-lg ring-4 ring-green-500/70">
  <img
    src={profile}
    alt="Mashood"
    className="w-full h-full object-cover rounded-full border-4 border-white"
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