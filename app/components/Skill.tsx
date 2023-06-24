import { SkillType } from "@/typings";
import { motion } from "framer-motion";

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -10 : 200,
                opacity: 0,
            }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={skill?.imageSrc}
            alt={skill?.name}
            className='rounded-full border border-gray-500 object-cover w-10 h-10 lg:w-20 lg:h-20 filter group-hover:grayscale transition durantion-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition durantion-300 ease-in-out group-hover:bg-white w-10 h-10 lg:w-20 lg:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm lg:text-xl font-bold text-black opacity-100'>{skill?.proficiency}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;