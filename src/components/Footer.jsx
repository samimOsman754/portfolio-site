import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/samimOsman754",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samim-osman-/",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_samim__osman_/",
    icon: <FaInstagram />,
  },
  {
    name: "Vercel",
    href: "https://vercel.com/samim-osmans-projects-ef3584b4",
    icon: <SiVercel />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-6 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm">
            &copy; {currentYear} Samim Osman. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-xl hover:text-white transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;