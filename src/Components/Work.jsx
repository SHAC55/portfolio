import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const companies = [
    {
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEMRfX2ouW2lw/company-logo_200_200/company-logo_200_200/0/1727855093948/prodigy_infotech_logo?e=1753920000&v=beta&t=dYo_1rfVmo_UGzzHcCVBHKHS-oAwpfDzcJqVF-Iim8c",
      name: "Prodigy Infotech",
      role: "Web Development Intern",
      date: "1 Jul 2024 - 31 Jul 2024",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1e1e1e] p-6 rounded-3xl shadow-lg dxxs:h-[400px]"
    >
      <h1 className="text-2xl font-medium text-white mb-4">Work Experience</h1>

      <div className="space-y-4">
        {companies.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex justify-between items-center gap-4 bg-[#272727] p-4 rounded-lg"
          >
            <div className="flex items-center">
              <img
                src={c.logo}
                alt={c.name}
                className="w-12 h-12 object-contain"
              />
              <div className="ml-2">
                <h2 className="text-white text-lg font-semibold">{c.name}</h2>
                <p className="text-gray-400">{c.role}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm">{c.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
