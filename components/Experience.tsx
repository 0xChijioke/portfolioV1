"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 lg:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="w-full flex items-center mt-20 space-x-5 overflow-x-scroll p-10 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-violet-500 snap-x snap-center snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default Experience;
