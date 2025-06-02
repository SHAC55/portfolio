import React from "react";
import { motion } from "framer-motion";

const Techstack = () => {
  const techStack = [
    { name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" },
    { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/128/136/136527.png" },
    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
    { name: "React", icon: "https://cdn-icons-png.flaticon.com/128/3459/3459528.png" },
    { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/128/15484/15484303.png" },
    { name: "Express.js", icon: "https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png" },
    { name: "MongoDB", icon: "https://img.icons8.com/?size=80&id=tBBf3P8HL0vR&format=png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png" },
    { name: "Git & GitHub", icon: "https://cdn-icons-png.flaticon.com/128/15466/15466163.png" },
    { name: "Postman", icon: "https://img.icons8.com/?size=80&id=EPbEfEa7o8CB&format=png" },
    { name: "Vite", icon: "https://img.icons8.com/?size=48&id=YO3YqSaTOu5K&format=png" },
    { name: "Docker (Learning)", icon: "https://img.icons8.com/?size=48&id=cdYUlRaag9G9&format=png" },
    { name: "Java", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section className="bg-[#1e1e1e] rounded-3xl text-white h-[215px] overflow-y-scroll custom-scroll mt-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="flex justify-center text-3xl font-bold mb-6 text-center sticky top-0 z-10 bg-[#1e1e1e] pt-4 pb-2">
          Tech Stack{" "}
          <img
            src="https://img.icons8.com/?size=64&id=FEvCqvHeABXC&format=png"
            className="w-10 ml-2"
            alt=""
          />
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2a2a] rounded-2xl p-4 flex items-center justify-center text-center shadow-md hover:bg-gray-700 transition"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={tech.icon}
                className="text-2xl mr-2 w-8"
                alt={tech.name}
                loading="lazy"
              />
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;
