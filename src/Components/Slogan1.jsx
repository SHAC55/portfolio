import React from "react";

const Slogan1 = () => {
  return (
    <div className="relative bg-[#1e1e1e] rounded-2xl p-6 text-white shadow-lg overflow-hidden mt-3 ss:h-[220px] h-[250px]">
      {/* <p className="text-sm text-gray-400 mb-2">
        I constantly strive to innovate and explore
      </p> */}

      <h2 className="text-3xl font-bold leading-snug mb-4">
        Passionate to pursue <br /> technology
      </h2>

      <p className="text-base text-gray-400 max-w-sm">
        Exploring DevOps, cloud computing, and scalable system architectures.
        Actively building projects and sharpening DSA & system
        design.
      </p>

      {/* Floating Tech Icons */}
      <div className="absolute ss:right-4 ss:bottom-4 bottom--32 flex gap-3 opacity-70 ss:mt-0 mt-3">
        <img
          src="https://cdn-icons-png.flaticon.com/128/919/919853.png"
          alt="TS"
          className="h-8 w-8 hover:scale-110 transition"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JS"
          className="h-8 w-8 hover:scale-110 transition"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="h-8 w-8 hover:scale-110 transition"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          className="h-8 w-8 hover:scale-110 transition"
        />
      </div>
    </div>
  );
};

export default Slogan1;
