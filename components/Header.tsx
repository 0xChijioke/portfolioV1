import React from 'react';
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}

        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}

        transition={{
            duration: 1.5,
        }}
        className='flex flex-row space-x-2 items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://www.twitter.com/chijoke_" fgColor='gray' bgColor='transperent' />
            <SocialIcon url="https://www.github.com/EngrGord" fgColor='gray' bgColor='transperent' />
            <SocialIcon url="https://www.linkedin.com/in/chijoke-ogbuanya/" fgColor='gray' bgColor='transperent' />
        </motion.div>

        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}

        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}

        transition={{ duration: 1.5 }}
         className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                network="email"
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header