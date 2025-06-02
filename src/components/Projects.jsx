"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Indexify",
      description:
        "A full-stack platform that leverages Machine Learning to automatically convert study notes into concise, user-friendly index cards.",
      tools: "Express.js, React, MongoDB, PyTorch",
      link: "https://github.com/dellis2cs/Indexify/tree/main",
      img: "Indexify.png",
    },
    {
      title: "Signa",
      description:
        "Developed a full stack machine Learning app to classify the entire sign language alphabet in realtime.",
      tools: "Python, React, Flask, Scikit-learn",
      link: "https://github.com/dellis2cs/sign.io",
      img: "Signa.png",
    },
    {
      title: "Orbit",
      description:
        "Currently designing and developing a full-stack interview preparation platform to track leetcode progression, manage contacts and internship applications, and a full markdown text editor, as well as other features to come. ",
      tools: "Express.js, React, JavaScript, PostgreSQL",
      link: "https://github.com/dellis2cs/Orbit",
      img: "Orbit.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light tracking-tight mb-12"
        >
          Selected Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              className="hover:scale-110 transition-all ease-in-out duration-[.3s]"
            >
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-video bg-gray-100 mb-4 overflow-hidden border border-neutral-200">
                  <div className="w-full h-full flex items-center justify-center">
                    {project.img && (
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-fill"
                      />
                    )}
                  </div>
                </div>
                <h3 className="text-xl mb-2 group-hover:text-gray-600 transition-colors ">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-gray-400 text-sm">{project.tools}</p>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
