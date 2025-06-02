import React from 'react';
import { motion } from 'framer-motion';

const Expertarea = () => {
  const skills = [
    { img: 'https://cdn-icons-png.flaticon.com/128/5968/5968292.png', title: 'JavaScript' },
    { img: 'https://cdn-icons-png.flaticon.com/128/3459/3459528.png', title: 'React.js' },
    { img: 'https://cdn-icons-png.flaticon.com/128/524/524554.png', title: 'Tailwind CSS' },
    { img: 'https://cdn-icons-png.flaticon.com/128/5968/5968322.png', title: 'Node.js' },
    { img: 'https://cdn-icons-png.flaticon.com/128/18025/18025491.png', title: 'Express.js' },
    { img: 'https://cdn-icons-png.flaticon.com/128/2906/2906274.png', title: 'MongoDB' },
    { img: 'https://cdn-icons-png.flaticon.com/128/15466/15466163.png', title: 'Git & GitHub' },
    { img: 'https://cdn-icons-png.flaticon.com/128/6489/6489902.png', title: 'Deployment' },
  ];

  return (
    <div className="bg-[#1e1e1e]  rounded-3xl shadow-lg h-[400px] overflow-y-scroll custom-scroll">
      <h1 className="text-2xl font-medium text-white mb-4 sticky z-10 top-0 bg-[#1e1e1e] pb-3 pt-5 ml-8">My Expertise</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 pr-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 mt-4 p-5 rounded-xl bg-[#1e1e1e]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, backgroundColor: '#2a2a2a' }}
          >
            <div className="bg-[#272727] rounded-full p-3 flex items-center justify-center w-12 h-12 ">
              <img src={skill.img} alt={skill.title} className="w-6 h-6 object-contain" />
            </div>
            <span className="text-gray-300 font-medium">{skill.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertarea;
