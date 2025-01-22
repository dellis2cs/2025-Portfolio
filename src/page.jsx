import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black relative p-4 md:p-8">
      {/* Decorative plus signs */}
      <div className="fixed top-8 left-8 opacity-20">
        <Plus className="w-6 h-6" />
      </div>
      <div className="fixed top-8 right-8 opacity-20">
        <Plus className="w-6 h-6" />
      </div>
      <div className="fixed bottom-8 left-8 opacity-20">
        <Plus className="w-6 h-6" />
      </div>
      <div className="fixed bottom-8 right-8 opacity-20">
        <Plus className="w-6 h-6" />
      </div>

      <main className="max-w-7xl mx-auto rounded-[2rem] border border-gray-200 min-h-screen bg-white overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
