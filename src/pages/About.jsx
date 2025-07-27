import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/about.jpg";
import { fadeUp, transition } from "../utils/animations";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ ...transition.default }}
          className="text-center mb-16"
        >
          <h2 className="md:text-4xl lg:text-5xl text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A little bit about my journey and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ ...transition.default, delay: 0.2 }}
            className="md:col-span-2"
          >
            <img
              src={AboutImage}
              alt="Samim Osman"
              className="rounded-lg w-full h-full shadow-lg border-4 border-gray-800 hover:shadow-purple-500/20 transition-shadow duration-300"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ ...transition.default, delay: 0.4 }}
            className="md:col-span-3 text-gray-300 text-lg space-y-6"
          >
            <p>
              Hello! I'm Samim Osman, a dedicated Front-end Developer with a
              strong passion for creating beautiful, functional, and
              user-centric web applications. My journey into web development
              started with a fascination for how things work on the internet,
              which quickly grew into a full-fledged passion for coding and
              design.
            </p>
            <p>
              I specialize in the MERN stack (MongoDB, Express.js, React,
              Node.js) and have a particular love for Nexs.js and its ecosystem. I
              enjoy turning complex problems into simple, elegant solutions. I'm
              always eager to learn new technologies and improve my skills to
              keep up with the fast-paced world of web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new tech blogs,
              contributing to open-source projects, or enjoying a good cup of
              coffee. I'm excited about the future of the web and look forward
              to building amazing things.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;