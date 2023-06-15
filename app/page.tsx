// app/page.tsx
import type { NextPage } from "next";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Home: NextPage = () => {
  return (
    // My laptop screen is w-8xl
    <div>

      {/* Hero */}
      <section id="hero" className="snap-end h-screen">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-end h-screen">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-end h-screen">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-end h-screen">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start h-screen">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start h-screen">
        <Contact />
      </section>

    </div>
  )
}

export default Home;
