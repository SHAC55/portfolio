import React from "react";
import Intro from "../Components/Intro";
import Contactform from "../Components/Contactform";

const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between mt-10 min-w-[400px]">

        <Contactform />
       
    </div>
  );
};

export default Contact;
