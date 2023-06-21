"use client";
import { motion } from "framer-motion";
import Skill from "./Skill";
import skillData from "@/utils/skills";

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative flex-col text-center md:text-left lg:flex-row max-w-full xl:px-10 px-1 justify-center lg:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

        <h3 className="absolute top-36 uppercase traking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 pt-16">
        {skillData.map((skill) => (
          <Skill
            key={skill.id}
            skill={skill}
            directionLeft={true}
          />
            ))}
        </div>
        
    </motion.div>
  )
}

export default Skills;