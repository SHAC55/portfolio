import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import { useEffect } from "react";

const App = () => {

  return (
    <div className="p-[30px]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default App;
