import React from "react";
import { LuHandshake } from "react-icons/lu";

import { motion } from "framer-motion";
import { fadeUp, transition } from "../utils/animations";

const Contact = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition.default }}
          className="mb-12"
        >
          <div className="size-24 mx-auto mb-8 bg-gray-900 rounded-full flex items-center justify-center">
            <LuHandshake className="text-5xl text-gray-400" />
          </div>

          <h2 className="md:text-4xl lg:text-5xl text-3xl mb-12">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
              Let's build something
            </span>
            <br className="md:block hidden" />
            <span className="bg-gradient-to-r from-white via-gray-400 to-gray-500 text-transparent bg-clip-text">
              {" "}
              amazing together
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ ...transition.default, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:samimosman812@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Email Me
          </a>
          <a
            href="https://wa.me/01637657587"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center px-8 py-3 border border-gray-700 text-white rounded-full font-medium hover:border-gray-500 transition-colors"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
