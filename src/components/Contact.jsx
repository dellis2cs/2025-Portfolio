import { motion } from "framer-motion";
import { Mail, Smartphone } from "lucide-react";
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
          <div className="text-neutral-400">Get in touch</div>
          <div className="space-y-4">
            <p className="text-gray-600 ">
              Open to new opportunities. Feel free to reach out!
            </p>
            <div className="space-y-2">
              <p>
                {/* Email Link with underline animation */}
                <a
                  href="mailto:dellisuo@gmail.com"
                  target="_blank"
                  className="relative  group text-black hover:text-gray-600 transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  dellisuo@gmail.com
                  <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-600 transition-[width] duration-300 group-hover:w-[35%]" />
                </a>
              </p>
              <p className="text-gray-600 flex items-center gap-1.5">
                <Smartphone size={19} />
                (925)-708-9893
              </p>
              <p className="text-gray-600">Eugene, OR</p>
            </div>
            <div className="flex space-x-4 pt-4">
              {/* LinkedIn */}
              <a
                href="#"
                className="relative inline-block group text-black hover:text-neutral-600 transition-colors"
              >
                LinkedIn
                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-600 transition-[width] duration-300 group-hover:w-full" />
              </a>
              {/* GitHub */}
              <a
                href="#"
                className="relative inline-block group text-black hover:text-neutral-600 transition-colors"
              >
                GitHub
                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-600 transition-[width] duration-300 group-hover:w-full" />
              </a>
              {/* Resume */}
              <a
                href="#"
                className="relative inline-block group text-black hover:text-neutral-600 transition-colors"
              >
                Resume
                <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-600 transition-[width] duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
