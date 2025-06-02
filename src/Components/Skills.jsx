import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaDatabase,
  FaUserShield,
  FaPuzzlePiece,
  FaCogs,
  FaRocket,
  FaBug,
} from "react-icons/fa";

const Skills = () => {
  const services = [
    {
      icon: <FaLaptopCode size={25} color="#3B82F6" />,
      title: "Full-Stack Web Development",
      description: "Build complete web applications from frontend to backend."
    },
    {
      icon: <FaCode size={25} color="#3B82F6" />,
      title: "Custom Frontend Development",
      description: "Craft responsive, user-friendly interfaces tailored to your brand."
    },
    {
      icon: <FaServer size={25} color="#3B82F6" />,
      title: "Backend API Development",
      description: "Design scalable APIs and server-side logic for seamless data flow."
    },
    {
      icon: <FaDatabase size={25} color="#3B82F6" />,
      title: "Database Design & Integration",
      description: "Structure, connect, and optimize databases for your application."
    },
    {
      icon: <FaUserShield size={25} color="#3B82F6" />,
      title: "Authentication & Authorization",
      description: "Implement secure login systems and role-based access control."
    },
    {
      icon: <FaPuzzlePiece size={25} color="#3B82F6" />,
      title: "Third-Party API Integration",
      description: "Connect external services to enhance your app's capabilities."
    },
    {
      icon: <FaCogs size={25} color="#3B82F6" />,
      title: "DevOps & Deployment",
      description: "Automate deployment workflows and manage hosting infrastructure."
    },
    {
      icon: <FaRocket size={25} color="#3B82F6" />,
      title: "Performance Optimization & SEO",
      description: "Speed up your site and improve visibility on search engines."
    },
    {
      icon: <FaBug size={25} color="#3B82F6" />,
      title: "Bug Fixing & Code Refactoring",
      description: "Eliminate errors and improve code quality for maintainability."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1e1e1e] h-[767px] rounded-3xl  overflow-y-scroll custom-scroll grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
    >
      <h1 className="text-3xl font-semibold text-white col-span-full sticky top-0 bg-[#1e1e1e] z-10 mt-3 pt-3 pb-1 ml-4">
        Services I Offered
      </h1>

      {services.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#272727] rounded-xl p-5 flex flex-col gap-3 ml-2 mr-2 mb-3 text-white shadow-md hover:shadow-lg transition-all duration-200"
        >
          <div>{s.icon}</div>
          <h2 className="text-2xl font-semibold">{s.title}</h2>
          <p className="text-gray-400 text-sm">{s.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
