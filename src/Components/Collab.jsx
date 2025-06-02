import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Collab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center p-4 bg-[#1e1e1e] rounded-3xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center mt-3"
      >
        Collaborate, Create <span className="text-blue-600">amazing </span>
        things together 🚀
      </motion.h1>

  <motion.button
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.96 }}
    className="mt-6 px-6 py-3 mb-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold"
    style={{
      boxShadow:
        "0 0 8px #3b82f6, 0 0 12px #9333ea, 0 0 20px rgba(147, 51, 234, 0.6)",
    }}
  >
    <NavLink to="/contact">
    Let's work together
    </NavLink>
  </motion.button>


    </motion.div>
  );
};

export default Collab;
