import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="" className="py-20 bg-white px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light tracking-tight mb-12"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12"
        >
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <div className="text-gray-400">Apr 2024 – Present</div>
            <div>
              <h3 className="text-xl mb-4">AI Research Intern</h3>
              <p className="text-gray-600 mb-4">Grok AI – San Francisco, CA</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Contributing to AI-driven solutions for product strategies
                </li>
                <li>
                  Working under the mentorship of the Head of Enterprise Product
                  Management at You.com
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <div className="text-gray-400">Jan 2025</div>
            <div>
              <h3 className="text-xl mb-4">Quack Hacks Hackathon</h3>
              <p className="text-gray-600 mb-4">
                Univserity of Oregon- Eugene, OR
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Competed in the first ever University of Oregon Hackathon
                </li>
                <li>
                  Built an AI study tool with a team of 4 which takes in notes
                  and the ML model creates an index card out of the notes you
                  submitted for study purposes
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <div className="text-gray-400">Sept 2022 – May 2026</div>
            <div>
              <h3 className="text-xl mb-4">BS in Computer Science</h3>
              <p className="text-gray-600 mb-4">University of Oregon</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Coursework: Computer Organization, Data Structures,
                  Algorithms, Unix and C++
                </li>
                <li>
                  Awards: Dean&apos;s List, Mind&apos;s Move Mountains
                  Scholarship
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
