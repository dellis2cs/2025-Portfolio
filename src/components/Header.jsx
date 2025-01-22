import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Make the header fixed at the top, full width
    <header className="fixed top-0 left-0 right-0 w-full px-8 mx-auto mt-5 bg-white/80 backdrop-blur-sm z-50">
      {/* 
        Use a wrapper (div) with `mx-auto max-w-7xl` to center contents.
        `px-8 py-6` for padding, plus flex utilities for layout.
      */}
      <div className="mx-auto max-w-7xl px-8 py-6 flex justify-between items-center">
        <a href="/" className="text-2xl font-light tracking-[0.2em]">
          DE
        </a>
        <nav className="hidden md:flex space-x-12">
          <a
            href="#about"
            className="tracking-widest text-sm hover:text-gray-600 transition"
          >
            HOME
          </a>
          <a
            href="#experience"
            className="tracking-widest text-sm hover:text-gray-600 transition"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className="tracking-widest text-sm hover:text-gray-600 transition"
          >
            WORKS
          </a>
          <a
            href="#contact"
            className="tracking-widest text-sm hover:text-gray-600 transition"
          >
            CONTACT
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white p-8"
        >
          <a
            href="#about"
            className="block py-3 tracking-widest text-sm hover:text-gray-600 transition"
          >
            HOME
          </a>
          <a
            href="#experience"
            className="block py-3 tracking-widest text-sm hover:text-gray-600 transition"
          >
            ABOUT
          </a>
          <a
            href="#projects"
            className="block py-3 tracking-widest text-sm hover:text-gray-600 transition"
          >
            WORKS
          </a>
          <a
            href="#contact"
            className="block py-3 tracking-widest text-sm hover:text-gray-600 transition"
          >
            CONTACT
          </a>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
