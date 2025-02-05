import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black px-4 md:px-20 ">
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
          <div className="flex items-center justify-center  space-x-4 transition-all hover:scale-110  ease-in-out  duration-[.25s] ">
            <motion.a
              href="/dellisResume.pdf" // Updated to point to your resume PDF
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security best practice for external links
              whileTap={{ scale: 0.95 }}
              className="border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all hover:scale-110 ease-in-out duration-[.25s]"
            >
              RESUME
            </motion.a>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm">
            {/* GITHUB LINK */}
            <a
              href="https://github.com/dellis2cs"
              target="_blank"
              className="relative inline-block group hover:text-neutral-600 transition-colors"
            >
              Github
              {/* The underline: starts at width 0, expands on hover */}
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <span className="text-gray-300">/</span>

            {/* LINKEDIN LINK */}
            <a
              href="https://www.linkedin.com/in/dominic-ellis-b63ab8238/"
              className="relative inline-block group hover:text-gray-600 transition-colors"
            >
              LinkedIn
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <span className="text-gray-300">/</span>

            {/* EMAIL LINK */}
            <a
              href="mailto:dellisuo@gmail.com"
              target="_blank"
              className="relative inline-block group hover:text-gray-600 transition-colors"
            >
              Email
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-neutral-600 transition-all duration-300 group-hover:w-full" />
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
