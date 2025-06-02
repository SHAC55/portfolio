import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Adv = () => {
  return (
    <motion.div
      className='bg-gradient-to-br from-gray-100 to-white dark:from-[#1f1f1f] dark:to-[#2b2b2b] rounded-3xl p-6 shadow-lg h-[400px]'
      animate={{
        boxShadow: [
          '0 0 10px rgba(59, 130, 246, 0.5)',
          '0 0 20px rgba(147, 51, 234, 0.7)',
          '0 0 10px rgba(59, 130, 246, 0.5)'
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }}
    >
      <h1 className='text-black dark:text-white font-extrabold text-3xl sm:text-4xl mt-4'>
        Let's Work Together <span className="inline-block">🤝</span>
      </h1>

      <div className='text-gray-600 dark:text-gray-400 font-medium text-lg mt-10 space-y-2'>
        <p>Let’s Build Something Great Together 🚀</p>
        <p>Open to Collaborate – Ready to Innovate 💻</p>
        <p>Hire Me to Make It Happen 🎯</p>
        <p>Passionate Developer Ready for Your Next Big Idea 💡</p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md"
      >
        <NavLink to="/contact">
        Let's Talk
        </NavLink>
      </motion.button>
    </motion.div>
  );
};

export default Adv;
