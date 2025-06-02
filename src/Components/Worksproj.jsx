import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Worksproj = () => {
  const projects = [
    {
      Img: "https://s.tmimgcdn.com/scr/800x500/203100/marketkit-multipurpose-ecommerce-html-website-template_203166-original.jpg",
      desc: [
        "Full-stack MERN application (MongoDB, Express.js, React, Node.js)",
        "Single admin panel to manage products, orders, and users",
        "User authentication and protected routes with JWT",
        "Responsive UI with cart and product listings",
        "Admin dashboard with order and inventory control",
      ],
      title: "E-commerce Web app",
      source: "https://github.com/SHAC55/E-Commerce",
      live: "https://admirable-vacherin-95349f.netlify.app/",
      underDevelopment: false,
    },
    {
      Img: "https://i.pinimg.com/736x/e8/d5/65/e8d565a0f3e1a7afa585a13af73c1f5b.jpg",
      desc: [
        "MERN stack application for managing personal and collaborative tasks",
        "User authentication and protected routes using JWT",
        "Add, update, delete, and categorize tasks by status and priority",
        "Collaborate by adding friends and assigning tasks to them",
        "Manage friend list with add/remove functionality",
      ],
      title: "Advanced Task Manager",
      source: "https://github.com/SHAC55/Task-Manager",
      live: "",
      underDevelopment: true,
    },
  ];

  const handleLiveClick = (title) => {
    toast.warning(` "${title}" is under development`, {
      position: "bottom-right",
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <motion.div className="bg-[#1e1e1e] h-[770px] rounded-3xl overflow-y-scroll custom-scroll p- mt-8 3xl:mt-0">
      <h1 className="text-3xl font-bold text-white sticky top-0 z-10 bg-[#1e1e1e] ms:pt-8 pt-1 pb-2 pl-6">
        My Projects
      </h1>

      <div className="px-6 pb-6 flex 3xl:flex-row flex-col flex-wrap justify-between mt-5 gap-y-6">
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
            className="bg-[#272727] flex flex-col rounded-md shadow-md 3xl:w-[45%] 2xl:w-[100%] ms:p-2 p-1 border border-transparent hover:border-blue-500 duration-300 min-h-[500px]"
          >
            <img
              src={proj.Img}
              alt={proj.title}
              className="w-full h-60 object-cover rounded-md"
            />

            <div className="px-4 py-2">
              <p className="text-white font-semibold mt-2 text-[22px] h-[60px] overflow-hidden">
                {proj.title}
              </p>

              {proj.desc.length > 0 && (
                <ul className="text-gray-400 text-md list-disc pl-5 space-y-1">
                  {proj.desc.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex justify-between px-4 pb-4 mt-4">
              {/* Source Code Button */}
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

              {/* Live Button or Under Development Toast Trigger */}
              {proj.underDevelopment ? (
                <motion.button
                  onClick={() => handleLiveClick(proj.title)}
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

      {/* Toast Container */}
      <ToastContainer />
    </motion.div>
  );
};

export default Worksproj;
