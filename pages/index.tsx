import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-violet-900 to-black text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Gord&apos;s Work</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start h-screen'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center h-screen'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center h-screen'>
        <Experience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start h-screen'>
        <Skills />
      </section>

      {/* Projects */}
      <section id='skills' className='snap-start h-screen'>
        <Projects />
      </section>

      {/* Contact */}

    </div>
  )
}

export default Home
