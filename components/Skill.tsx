import React from 'react';
import { motion } from "framer-motion";
import NextLogo from "../assets/Next.js.png";

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={"https://img.icons8.com/color/48/000000/nodejs.png"}
            className='rounded-full border border-gray-500 object-cover w-10 h-10 lg:w-16 lg:h-16 filter group-hover:grayscale transition durantion-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition durantion-300 ease-in-oout group-hover:bg-white w-10 h-10 lg:w-16 lg:h-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm lg:text-xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;