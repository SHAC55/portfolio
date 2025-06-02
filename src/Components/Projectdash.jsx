import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Projectdash = () => {
  const projects = [
    {
      Img: "https://s.tmimgcdn.com/scr/800x500/203100/marketkit-multipurpose-ecommerce-html-website-template_203166-original.jpg",
      title: "E-commerce with one admin panel",
      source: "https://github.com/SHAC55/E-Commerce",
      live: "https://admirable-vacherin-95349f.netlify.app/",
      underDevelopment: false,
    },
    {
      Img: "https://i.pinimg.com/736x/e8/d5/65/e8d565a0f3e1a7afa585a13af73c1f5b.jpg",
      title: "Advanced Task Manager",
      source: "https://github.com/SHAC55/Task-Manager",
      live: "",
      underDevelopment: true,
    },
  ];

  const underDevelopmentNotify = () => {
    toast.warning(" This project is under development ! ", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <motion.div className="bg-[#1e1e1e] rounded-3xl overflow-y-scroll custom-scroll h-[524px]">
      <header className="flex justify-between p-6 bg-[#1e1e1e] sticky top-0 z-10">
        <h1 className="text-2xl font-medium text-white">My Projects</h1>
        <NavLink
          className="text-blue-600 border-b-2 border-blue-600 hover:text-gray-500 hover:border-gray-500 transition-all duration-300"
          to="/works"
        >
          See All
        </NavLink>
      </header>

      <div className="pb-6 space-y-4 flex flex-col mt-5 items-center shadow-xl">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-[#272727] flex flex-col rounded-md shadow-md w-[90%] p-0 border border-transparent hover:border-blue-500 duration-300"
          >
            <img
              src={proj.Img}
              alt={proj.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <div className="flex items-center justify-between px-4 py-2">
              <p className="text-white font-semibold mt-2 text-[22px]">{proj.title}</p>
            </div>

            <div className="flex justify-between px-4 pb-4 mt-4">
              <a href={proj.source} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-blue-600 rounded-md px-4 py-2 text-white font-medium"
                >
                  Source Code
                </motion.button>
              </a>

              {proj.underDevelopment ? (
                <motion.button
                  onClick={underDevelopmentNotify}
                  initial={{ rotate: 320 }}
                  whileHover={{ rotate: 0 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-blue-400 bg-[#161616] p-2 rounded-full hover:text-blue-500 cursor-pointer"
                >
                  <FaArrowRight size={20} />
                </motion.button>
              ) : (
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    initial={{ rotate: 320 }}
                    whileHover={{ rotate: 0 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-blue-400 bg-[#161616] p-2 rounded-full hover:text-blue-500"
                  >
                    <FaArrowRight size={20} />
                  </motion.button>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <ToastContainer />
    </motion.div>
  );
};

export default Projectdash;
