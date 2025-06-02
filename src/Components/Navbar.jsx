import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Dashboard" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/works", label: "Works" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-[#1e1e1e] text-gray-300 p-4 flex justify-between items-center rounded-lg w-full min-w-[400px]">
      <h1 className="text-white font-bold text-xl">Portfolio.</h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive ? "text-white border-b-2 border-white" : ""
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-[#1e1e1e] px-4 py-20 z-50 flex flex-col items-center md:hidden">

    {/* Close button */}
    <button
      onClick={toggleMenu}
      className="absolute top-4 right-4 text-white z-50"
    >
      <X className="w-6 h-6" />
    </button>

    {navLinks.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `cursor-pointer hover:text-white my-4 text-lg ${
            isActive ? 'text-white border-b-2 border-white font-semibold' : ''
          }`
        }
      >
        {label}
      </NavLink>
    ))}
  </div>
)}

    </div>
  );
};

export default Navbar;
