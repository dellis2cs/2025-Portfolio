import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light tracking-tight mb-12"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-gray-600">
              Computer Science student at the University of Oregon, graduating
              in May 2026. Passionate about leveraging technology to solve
              real-world problems, with a focus on Machine Learning and Web
              Development.
            </p>
            <p className="text-gray-600">
              Currently working as a Machine Learning Research Intern at Grok
              AI, gaining valuable experience in AI-driven solutions for product
              strategies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
