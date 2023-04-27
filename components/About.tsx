import { motion } from 'framer-motion';
import React from 'react';
import placeHolderImage from "../assets/placeholder.jpg";
import Me from "../assets/me.jpg";
import Image from 'next/image';

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
         className='flex flex-col relative h-screen text-center md:text-left md:flex-row max=w=6xl px-10 justify-evenly mx=auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] z-10 text-gray-500 text-2xl'>About</h3>
        <motion.div
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 lg:w-[300px] lg:h-[400px]" >
          <Image
            src={Me}
            width={300}
            height={Math.round((300 * 1280) / 847)}
            className="rounded-xl my-4"
            alt="Me"
          />
      </motion.div>

            <div className='space-y-6 mt-5 px-0 md:px-10'>
                <h4 className='text-2xl font-semibold'>Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p>
                  Hi, I'm CJ, a Web3 builder with a passion for creating stunning DApp frontends.     
                   With 5 years of experience in Javascript development, I specialize in React, Next, Typescript and Tailwind. When I'm not building, I love spending time in nature, working out, or just relaxing. Let's connect on WhatsApp or Twitter to discuss your DApp project and how I can help bring it to life!
                </p>
            </div>
    </motion.div>
  )
}

export default About