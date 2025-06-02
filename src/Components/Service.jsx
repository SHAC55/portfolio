import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, FaCode, FaServer, FaDatabase, FaUserShield, 
  FaChartBar, FaPuzzlePiece, FaCogs, FaRocket, FaBug 
} from "react-icons/fa";

const Service = () => {
  const services = [
    { icon: <FaLaptopCode size={25} color="#3B82F6" />, title: 'Full-Stack Web Development' },
    { icon: <FaCode size={25} color="#3B82F6" />, title: 'Custom Frontend Development' },
    { icon: <FaServer size={25} color="#3B82F6" />, title: 'Backend API Development' },
    { icon: <FaDatabase size={25} color="#3B82F6" />, title: 'Database Design & Integration' },
    { icon: <FaUserShield size={25} color="#3B82F6" />, title: 'Authentication & Authorization' },
    // { icon: <FaChartBar size={20} color="#3B82F6" />, title: 'Admin Dashboards & CMS Panels' },
    { icon: <FaPuzzlePiece size={25} color="#3B82F6" />, title: 'Third-Party API Integration' },
    { icon: <FaCogs size={25} color="#3B82F6" />, title: 'DevOps & Deployment' }, 
    { icon: <FaRocket size={25} color="#3B82F6" />, title: 'Performance Optimization & SEO' },
    { icon: <FaBug size={25} color="#3B82F6" />, title: 'Bug Fixing & Code Refactoring' },
  ];

  return (
    <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1e1e1e]  rounded-3xl overflow-y-scroll custom-scroll dlg:h-[525px] dxxs:h-[400px]"
    >
      <header className="flex justify-between p-6 bg-[#1e1e1e] sticky top-0 z-10">
        <h1 className="text-2xl font-medium text-white">Services || Offered</h1>
        <NavLink
          className="text-blue-600 border-b-2 border-blue-600 hover:text-gray-500 hover:border-gray-500 transition-all duration-300"
          to="/services"
        >
          See All
        </NavLink>
      </header>
      <div className="px-6 py-4 space-y-5 flex flex-col">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-4 text-white hover:shadow-2xl hover:bg-[#272727] transition-all duration-400 cursor-pointer p-2 hover:rounded-md">
            {service.icon}
            <span className="text-2xl text-gray-400 ">{service.title}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Service;
