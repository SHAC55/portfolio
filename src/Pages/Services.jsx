import React from "react";
import Intro from "../Components/Intro";
import Collab from "../Components/Collab";
import Skills from "../Components/Skills";
import Methodology from "../Components/Methodology";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-wrap mt-4 justify-between min-w-[400px]"
    >
      <div className="flex justify-between ms:flex-row flex-col w-full mt-5">
        {/* intro */}
        <div className="5xl:w-[670px] 3xl:w-[650px] 2xl:w-[630px] xl:w-[600px] lg:w-[570px] md:w-[550px] s:w-[520px] xs:w-[500px] xxs:w-[480px] xxxs:w-[450px] ms:w-[430px] w-full">
          <Intro />
          <Methodology />
        </div>

        {/* main */}
        <div className="ms:mt-0 mt-4 5xl:w-[1150px] 4xl:w-[1100px] 3xl:w-[1050px] 2xl:w-[1000px] xl:w-[950px] lg:w-[900px] md:w-[850px] s:w-[800px] xs:w-[750px] xxs:w-[700px] xxxs:w-[650px] ms:w-[600px] w-full min-w-[400px]] ">
          <Skills />
        </div>
      </div>

      {/* collab */}
      <div className="w-full  min-w-[400px] mt-4 ">
        <Collab />
      </div>
    </motion.div>
  );
};

export default Services;
