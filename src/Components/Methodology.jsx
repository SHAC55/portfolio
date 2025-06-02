import React from "react";
import { motion } from "framer-motion";

const Methodology = () => {
  const strategies = [
    {
      title: "📋 1. Planning & Research",
      desc: "I begin by clearly defining the project scope, target users, and core features. I research similar solutions and brainstorm improvements. Tools like Notion, ChatGPT, and Figma help with ideation and rough planning.",
    },
    {
      title: "🛠️ 2. Environment Setup & Development",
      desc: "I initialize version control with Git, configure the project environment, and break features into components. I use React, Tailwind CSS, Express.js, and MongoDB to build scalable, full-stack applications.",
    },
    {
      title: "🔐 3. Authentication & API Handling",
      desc: "I implement secure authentication using JWT, structure RESTful APIs, and test them using Postman. I also use MongoDB Compass for real-time database interaction and optimization.",
    },
    {
      title: "🎨 4. UI Optimization & QA",
      desc: "Once core features are ready, I polish the UI for responsiveness and accessibility. I emphasize clean code, reusability, and cross-device testing.",
    },
    {
      title: "🚀 5. Deployment & Iteration",
      desc: "I deploy using platforms like Vercel or Render, collect real-user feedback, and iterate to improve functionality and UX.",
    },
  ];

  // Variants for container and items
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.15,
        when: "beforeChildren",
        ease: "easeOut",
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#1e1e1e] text-white rounded-3xl shadow-lg mt-3 min-w-[400px] h-[233px] overflow-y-scroll custom-scroll"
    >
      <h2 className="text-3xl font-bold mb-6 text-center sticky top-0 z-10 bg-[#1e1e1e] pt-4 pb-2">
        My Project Development Workflow 🧠
      </h2>
      <div className="space-y-4 pl-7 pr-7">
        {strategies.map((s, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="bg-[#2a2a2a] p-4 rounded-lg hover:bg-[#333333] transition"
          >
            <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Methodology;
