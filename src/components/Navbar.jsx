import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 relative border-b border-gray-600">
      <div className="flex items-center gap-2">
        <span className="p-2 bg-gray-800 rounded-full ">
          <IoIosMail className="text-white" />
        </span>
        <a
          href="mailto:samimosman812@gmail.com"
          className={isMenuOpen ? "hidden" : "block"}
        >
          samimosman812@gmail.com
        </a>
      </div>

      {/* mobile menu button */}
      <button
        className="md:hidden z-50"
        aria-label="Toggle navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-gray-300 transition-all ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-300 my-1.5 transition-all ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-300 transition-all ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* mobile navigation */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center space-y-4 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <a
              href="https://www.linkedin.com/in/samim-osman-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_samim__osman_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/samimOsman754"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com/samim-osmans-projects-ef3584b4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Vercel
            </a>
          </li>
        </ul>
      </nav>

      {/* overlay */}
      {isMenuOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* desktop navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/samim-osman-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              LinkedIn
            </a>
          </li>
          <span className="text-gray-300">/</span>
          <li>
            <a
              href="https://www.instagram.com/_samim__osman_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Instagram
            </a>
          </li>
          <span className="text-gray-300">/</span>
          <li>
            <a
              href="https://github.com/samimOsman754"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              GitHub
            </a>
          </li>
          <span className="text-gray-300">/</span>
          <li>
            <a
              href="https://vercel.com/samim-osmans-projects-ef3584b4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Vercel
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
