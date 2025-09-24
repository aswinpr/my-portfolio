import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-emerald-700 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 md:justify-center">
        {/* Desktop Menu (centered) */}
        <ul className="hidden md:flex space-x-10 text-lg font-bold">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Hamburger button (only on mobile) */}
        <button
          className="md:hidden focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (centered) */}
      {isOpen && (
        <div className="md:hidden bg-emerald-800">
          <ul className="flex flex-col items-center space-y-4 px-4 py-6 text-lg font-bold">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
