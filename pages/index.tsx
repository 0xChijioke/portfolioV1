import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-r from-violet-900 to-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Gord&apos;s Work</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}

    </div>
  )
}

export default Home
