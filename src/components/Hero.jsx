import React from "react";
import profile from "../assets/profile2.jpg";
import { PiHandWavingDuotone } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeUp,
  nameTag,
  transition,
  buttonHover,
  profileImage,
  nameTagTransition,
} from "../utils/animations";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center flex-col min-h-[90vh] text-center px-4 md:px-0 overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        animate={{
          x: [-20, 5, -20],
          y: [0, 15, 0],
          rotate: [0, 0, 5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 -left-24 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-lighten filter blur-2xl opacity-50"
      />
      <motion.div
        animate={{
          x: [20, -5, 20],
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
        className="absolute top-1/3 -right-24 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-lighten filter blur-2xl opacity-50"
      />
      <motion.div
        animate={{
          x: [-10, 10, -10],
          y: [10, -10, 10],
          rotate: [5, 0, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 10,
        }}
        className="absolute bottom-1/4 left-10 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-lighten filter blur-3xl opacity-60"
      />

      <div className="z-10 flex flex-col items-center">
        {/* Profile Image & Name */}
        <div className="relative mb-8">
          {/* Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-2xl"></div>
          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-full z-10 relative shadow-2xl border-4 border-gray-800 transition-transform duration-300 hover:scale-105"
            initial={profileImage.initial}
            animate={profileImage.animate}
            transition={profileImage.transition}
          />
          {/* Animated Name */}
          <motion.div
            initial={nameTag.initial}
            animate={nameTag.animate}
            transition={nameTagTransition}
            className="absolute -top-4 -right-32 z-30 bg-gray-900/80 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg flex items-center gap-2 border border-gray-700"
          >
            <span className="text-base font-semibold flex items-center text-gray-200">
              Samim Osman
              <span className="ml-2 animate-waving-hand">
                <PiHandWavingDuotone size={22} className="" />
              </span>
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition.default, delay: 0.4 }}
          className="text-gray-300 mb-4 text-lg md:text-xl max-w-lg"
        >
          Hi, I’m Samim — a passionate Front-end Developer.
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition.default, delay: 0.5 }}
          className="md:text-6xl text-4xl px-2 md:px-0 font-bold mb-8 max-w-3xl bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text"
        >
          I build modern, responsive websites with React and Next.js
        </motion.h1>

        {/* Button */}
        <div className="flex items-center gap-8 mt-8">
          {/* view projects button */}
          <motion.a
          href="/projects"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition.default, delay: 0.6 }}
          whileHover={buttonHover.whileHover}
          whileTap={buttonHover.whileTap}
          className=" py-4 px-8 bg-white text-black rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg shadow-white/10 hover:shadow-white/20 transition-shadow"
        >
          View My Work <FaArrowRight />
        </motion.a>
          {/* resume button */}
          <motion.a
            href="https://drive.google.com/file/d/1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...transition.default, delay: 0.7 }}
            whileHover={buttonHover.whileHover}
            whileTap={buttonHover.whileTap}
            className=" py-4 px-8 border border-gray-700 text-white rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:border-gray-500 transition-colors"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
