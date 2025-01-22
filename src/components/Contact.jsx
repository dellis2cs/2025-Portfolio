import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light tracking-tight mb-12"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-[200px_1fr] gap-8"
        >
          <div className="text-gray-400">Get in touch</div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Open to new opportunities and collaborations. Feel free to reach
              out!
            </p>
            <div className="space-y-2">
              <p>
                <a
                  href="mailto:dellisuo@gmail.com"
                  className="text-black hover:text-gray-600 transition"
                >
                  dellisuo@gmail.com
                </a>
              </p>
              <p className="text-gray-600">(925)-708-9893</p>
              <p className="text-gray-600">Eugene, OR</p>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-black hover:text-gray-600 transition">
                LinkedIn
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition">
                GitHub
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition">
                Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
