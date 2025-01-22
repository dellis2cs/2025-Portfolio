"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ML Sentiment Analysis",
      description:
        "Developed a machine Learning model to classify user product reviews as positive or negative.",
      tools: "Python, React, Flask",
      link: "#",
    },
    {
      title: "DevNetLink",
      description:
        "Built a full stack social media app during HackUO, a University of Oregon hackathon.",
      tools: "Express.js, React, MongoDB",
      link: "#",
    },
    {
      title: "Ecommerce Store",
      description:
        "Designed and developed an ecommerce storefront to enhance online shopping experiences.",
      tools: "React, JavaScript, fake-store API",
      link: "#",
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-video bg-gray-100 mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-9xl font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl mb-2 group-hover:text-gray-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <p className="text-gray-400 text-sm">{project.tools}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
