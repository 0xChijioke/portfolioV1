import React from 'react';
import { motion } from "framer-motion";

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
            src="https://camo.githubusercontent.com/9d4dc2e1f097fe4a81c0a78eb937f3a1f567baa05162b21f3e3a377d38a18dc8/68747470733a2f2f696d672e69636f6e73382e636f6d2f756c74726176696f6c65742f34302f3030303030302f72656163742e706e67"
            className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition durantion-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition durantion-300 ease-in-oout group-hover:bg-'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill;