import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi"; // better icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // close menu when a link is clicked
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-black text-white relative z-50">
      {/* Left - Logo and Email */}
      <div className="flex items-center gap-3 z-50">
        <span className="p-2 bg-gray-200 rounded-full shadow-lg">
          <IoIosMail className="text-black text-lg" />
        </span>
        <a
          href="mailto:samimosman812@gmail.com"
          className={`text-sm font-medium transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          samimosman812@gmail.com
        </a>
      </div>

      {/* Right - Hamburger Menu */}
      <button
        className="md:hidden z-50 text-2xl"
        aria-label="Toggle Menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm">
          {[
            ["LinkedIn", "https://www.linkedin.com/in/samim-osman-/"],
            ["Instagram", "https://www.instagram.com/_samim__osman_/"],
            ["GitHub", "https://github.com/samimOsman754"],
            ["Vercel", "https://vercel.com/samim-osmans-projects-ef3584b4"],
          ].map(([name, link]) => (
            <li key={name}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      <nav
        className={`fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-8 text-xl font-medium transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        {[
          ["LinkedIn", "https://www.linkedin.com/in/samim-osman-/"],
          ["Instagram", "https://www.instagram.com/_samim__osman_/"],
          ["GitHub", "https://github.com/samimOsman754"],
          ["Vercel", "https://vercel.com/samim-osmans-projects-ef3584b4"],
        ].map(([name, link]) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition-all duration-200"
          >
            {name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
