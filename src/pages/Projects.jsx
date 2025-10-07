import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { fadeUp, transition } from "../utils/animations";

import BlogApp from "../assets/project/BlogApp.png";
import PantoFurniture from "../assets/project/PantoFurniture.png";
import WebAgency from "../assets/project/WebAgency.png";
import Burger from "../assets/project/BurgerBuilder.png";
import NexsjsBasic from "../assets/project/NextjsBasic.png";
import { title } from "framer-motion/client";

// NOTE: You can add your project images to the `src/assets` folder
// and import them here, then uncomment the image property in projectsData.
// import Project1Img from "../assets/project1.png";
// import Project2Img from "../assets/project2.png";
// import Project3Img from "../assets/project3.png";

const projectsData = [
  {
    title: "full-stack-blog-app",
    description: "Full Stack Blog App is a web application built with Next.js and TypeScript that allows users to create, view, and manage blog posts. It combines both the frontend and backend in a single project, featuring modern development tools like Tailwind CSS, PostCSS, and ESLint. The app is designed for scalability and deployed on Vercel for smooth performance and easy updates",
    // image: Project1Img,
    image: BlogApp,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose" ,"Clerk"],
    liveUrl: "https://full-stack-blog-app-olive.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/full-stack-blog-app",
  },
  {
    title: "Panto Furniture",
    description: "This is a modern, responsive e-commerce web application for a furniture store built using React.js. The site showcases a clean and minimal design that highlights various furniture products with intuitive navigation and user-friendly interactions.",
    // image: Project1Img,
    image: PantoFurniture,
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://furniture-site-react.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/furniture-site-react/tree/main",

  },
  {
    title: "Web Code Agency",
    description:
      "Web Code Agency is a modern and visually engaging landing page designed for a fictional digital agency or freelance development team. Built using React and Tailwind CSS, the project showcases a clean, responsive, and mobile-friendly interface with smooth animations and structured sections.",
    // image: Project1Img,
    image: WebAgency,
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://web-code-agency-one.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/web-code-agency",
  },
  {
    title: "Burger Builder",
    description:
      "Burger Project is a simple and responsive food ordering web app built using React.js. The goal of this project was to learn component-based UI development and manage user interaction using props, state, and basic event handling in React.",
    // image: Project2Img,
    image: Burger,
    tags: ["React", "Tailwind CSS"],
    liveUrl: "https://burger-project-eta.vercel.app/",
    githubUrl: "https://github.com/samimOsman754/Burger-project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
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
              My Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ ...transition.default, delay: 0.1 * index }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
