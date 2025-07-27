import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiTailwindcss,
  SiMongoose,
} from "react-icons/si";
import { RiKey2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeUp, transition } from "../utils/animations";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
  { name: "Auth", icon: <RiKey2Line className="text-orange-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 md:px-6 bg-black">
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
              Technologies I Work With
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I have experience with a variety of modern web development
            technologies. Here are some of the key tools and frameworks I use.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transition.default, delay: 0.1 * index }}
              className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="text-6xl text-gray-300">{skill.icon}</div>
              <p className="font-semibold text-gray-200 mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;