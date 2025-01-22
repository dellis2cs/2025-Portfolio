import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black px-4 md:px-20">
      <div className="flex flex-col  items-center justify-center w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center  space-y-8 lg:mr-8"
        >
          <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Dom Ellis
          </h1>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 text-center">
            Full Stack Developer.
          </p>
          <div className="flex items-center justify-center  space-x-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-black px-6 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all "
            >
              SEE MY WORKS
            </motion.a>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-gray-600 transition">
              Github
            </a>
            <span className="text-gray-300">/</span>
            <a href="#" className="hover:text-gray-600 transition">
              LinkedIn
            </a>
            <span className="text-gray-300">/</span>
            <a href="#" className="hover:text-gray-600 transition">
              Email
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md lg:max-w-xl"
        >
          {/* Add any hero image or animation here */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
