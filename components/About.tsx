"use client";
import { motion } from "framer-motion";
import Me from "../assets/me.jpg";
import Image from "next/image";

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
         className="flex flex-col relative h-screen text-center md:text-left md:flex-row max=w=6xl px-10 justify-evenly mx=auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] z-10 text-gray-500 text-2xl">About</h3>
        <motion.div
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-0">
          <Image
            src={Me}
            className="rounded-full md:rounded-lg flex-shrink-0 w-32 h-32 object-cover md:h-95 md:w-64 lg:w-[800px] my-0 lg:my-auto lg:h-[430px]"
            alt="Me"
            placeholder="blur"
          />
        </motion.div>

            <div className="space-y-6 mt-5 px-0 md:px-10">
                <h4 className="text-2xl font-semibold">Here is a{" "}
                <span className="underline decoration-[#F7AB0A]/50">little</span> background
                </h4>
                <p className="tracking-wider">
                  Hi, I&apos;m CJ, a Web3 builder with a passion for creating stunning DApp frontends.     
                   With 5 years of experience in Javascript development, I specialize in React, Next, Typescript, Tailwind and EVM. When I&apos;m not buidling, I love spending time in nature, working out, or just relaxing. Let&apos;s connect on WhatsApp or Twitter to discuss your project and how I can help bring it to life!
                </p>
            </div>
    </motion.div>
  )
}

export default About;