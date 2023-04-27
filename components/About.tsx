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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
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
            className="mt-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 lg:w-[300px] lg:h-[400px]" >
          <Image
            src={Me}
            width={36}
            height={36}
          />
        </motion.div>

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl font-semibold'>Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
    </motion.div>
  )
}

export default About