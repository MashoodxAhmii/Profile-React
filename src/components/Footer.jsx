import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-12 bg-white dark:bg-gray-900 py-6 shadow-inner transition-colors duration-300">
      <div className="text-center text-gray-600 dark:text-gray-300 text-sm mb-3">
        Connect with me:
      </div>

      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-green-400 hover:text-indigo-800 dark:hover:text-green-300 transition transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>

       <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition transform hover:scale-110"
        style={{ color: '#0077B5' }}
        >
  <FaLinkedin size={24} />
</a>

      </div>

      <p className="mt-4 text-center text-gray-400 dark:text-gray-500 text-xs">
        © {new Date().getFullYear()} Mashood Ahmed. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
