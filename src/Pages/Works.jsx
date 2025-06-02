import React from "react";
import Intro from "../Components/Intro";
import Worksproj from "../Components/Worksproj";
import Collab from "../Components/Collab";
import Techstack from "../Components/Techstack";

const Works = () => {
  return (
    <div className="flex flex-wrap mt-6 justify-between overflow-y-scroll custom-scroll min-w-[400px] custom scroll-smooth">

      <div className="flex justify-between ms:flex-row flex-col w-full mt-5">
        {/* Intro */}
        <div className="5xl:w-[670px] 3xl:w-[650px] 2xl:w-[630px] xl:w-[600px] lg:w-[570px] md:w-[550px] s:w-[520px] xs:w-[500px] xxs:w-[480px] xxxs:w-[450px] ms:w-[430px] w-full">
          <Intro />
          <Techstack />
        </div>

        <div  className="bg-[#1e1e1e] rounded-3xl h-[750px] overflow-y-scroll custom-scroll ms:mt-0 mt-4 5xl:w-[1150px] 4xl:w-[1100px] 3xl:w-[1050px] 2xl:w-[1000px] xl:w-[950px] lg:w-[900px] md:w-[850px] s:w-[800px] xs:w-[750px] xxs:w-[700px] xxxs:w-[650px] ms:w-[600px] w-full min-w-[400px] scroll-smooth">
          <Worksproj />
        </div>
      </div>

     <div className="w-full  min-w-[400px] mt-4 ">
      <Collab />
      </div>
    </div>
  );
};

export default Works;
