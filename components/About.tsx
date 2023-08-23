import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
         className="flex flex-col relative h-screen text-center md:text-left md:flex-row max=w=6xl px-10 justify-evenly mx=auto items-center">
        <h3 className="absolute top-16 md:top-24 uppercase tracking-[20px] z-10 text-gray-500 text-2xl">About</h3>
        
            <div className="space-y-6 mt-5 text-center leading-10 z-10 px-0 md:px-10">
                <h4 className="text-2xl font-semibold">Here is a{" "}
                <span className="underline decoration-[#F7AB0A]/50">little</span> background
                </h4>
                <p className="tracking-wider">
                  I&apos;m CJ, a Web3 builder passionate about creating DApp frontends.     
                   With over 5 years of experience in Fullstack Javascript development, I specialize in React, Next, Typescript, Tailwind and everything EVM. When I&apos;m not buidling, I love spending time in nature, working out, or just relaxing. Let&apos;s connect on Twitter to discuss your project and how I can help bring it to life!
                </p>
            </div>
    </motion.div>
  )
}

export default About;
