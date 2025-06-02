import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Intro = () => {
  const handleDownload = () => {
    toast.success("Downloading CV...");
  };

  return (
    <motion.div
      className="bg-gray-200 text-black p-6 rounded-3xl shadow-lg max-h-[700px] min-w-[400px]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Profile Image */}
      <motion.img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iqNkkTsfH1iNdrZcX-stjpSjdcs_KMxMh6jv-sf59AtvFEs8LH29lJftp4BX6-KJsjA&usqp=CAU"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-md"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="text-3xl font-bold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Chaudhary Saif
      </motion.h1>

      <motion.p
        className="text-gray-500 font-medium mt-4 text-[16px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Enthusiastic and self-driven MERN Stack Developer with a strong passion
        for technology. Enjoys building full-stack apps and exploring new tools.
        Now diving into DevOps to enhance deployment & scalability.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-3 mt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="/Saif-resume.pdf" download onClick={handleDownload}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center px-4 py-2 bg-white rounded-xl shadow transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/2810/2810390.png"
              className="w-5"
              alt="CV"
            />
            <span className="ml-2 font-medium">My CV</span>
          </motion.button>
        </a>

        <a href="tel:+918451037216">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-xl shadow transition-transform"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/159/159052.png"
              className="w-5"
              alt="Call"
            />
            <span className="ml-2 font-medium">Call Me</span>
          </motion.button>
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="bg-white p-4 mt-8 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-lg font-semibold text-center mb-3">Follow Me</h2>
        <div className="flex justify-center gap-4">
          <motion.a
            href="https://linkedin.com/in/shac55"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3991/3991775.png"
              className="w-7"
              alt="LinkedIn"
            />
          </motion.a>
          <motion.a
            href="https://github.com/SHAC55"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
              className="w-7"
              alt="GitHub"
            />
          </motion.a>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=8451037216&text=Hi+there%21+I+saw+your+portfolio+and+would+like+to+connect.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/15713/15713434.png"
              className="w-8"
              alt="Whatsapp"
            />
          </motion.a>

          <motion.a
            href="https://leetcode.com/u/SHAC55/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="https://img.icons8.com/?size=80&id=rYBVqyU1tdKG&format=png"
              className="w-8"
              alt="Leetcode"
            />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
