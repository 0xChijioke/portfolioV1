"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
    const email = "chijokeogbuanya@gmail.com";
  return (
    <header className="absolute w-full overflow-hidden top-0 p-2 lg:px-6 flex items-center justify-between mx-auto z-20 xl:items-center">
        <motion.div
        initial={{
            x: -900,
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
        className="flex flex-row space-x-2 items-center">
            {/* Social Icons */}
            <SocialIcon url="https://www.twitter.com/0xChijoke" fgColor="gray" bgColor="transperent" />
            <SocialIcon url="https://www.github.com/0xChijoke" fgColor="gray" bgColor="transperent" />
            <SocialIcon url="https://www.linkedin.com/in/chijoke-ogbuanya/" fgColor="gray" bgColor="transperent" />
        </motion.div>

        <motion.div
            initial={{
                x: 900,
                opacity: 0,
                scale: 0.5,
            }}

            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}

            transition={{ duration: 1.5 }}
            className="flex flex-row justify-center items-center lg:pr-6 text-gray-300 cursor-pointer">
            <a href={`mailto:${email}`} className="flex p-3 lg:p-0 items-center">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="gray" 
                    className="w-7 h-7 text-gray-400">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

                <p className="uppercase hidden md:inline-flex text-sm ml-3 text-gray-400">
                    Get in touch
                </p>
            </a>
        </motion.div>
    </header>
  )
}

export default Header;
