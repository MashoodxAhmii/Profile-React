import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={28} className="text-cyan-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={28} className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} className="text-sky-400" /> },
  { name: 'HTML', icon: <FaHtml5 size={28} className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt size={28} className="text-blue-500" /> },
];

const Skills = () => {
  return (
    <motion.section
      className="max-w-6xl mx-auto my-10 px-6 py-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold text-indigo-600 dark:text-green-400 text-center mb-8">
        Skills
      </h2>

      <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="w-28 h-28 bg-indigo-100 dark:bg-gray-800 text-indigo-700 dark:text-white py-4 px-4 rounded-xl shadow-md flex flex-col items-center justify-center space-y-2 transition-transform"
          >
            {skill.icon}
            <span className="font-medium text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
