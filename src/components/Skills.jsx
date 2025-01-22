"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: ["C++", "C", "JavaScript", "Python", "C#", "SQL", "CSS"],
    },
    {
      category: "Technologies",
      items: [
        "React",
        "Flask",
        "NodeJS",
        "Express",
        "PostgreSQL",
        "REST APIs",
        "TailwindCSS",
      ],
    },
    {
      category: "Other",
      items: ["Git/Github", "Visual Studio Code", "MongoDB", "Spline"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light tracking-tight mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl mb-4">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
