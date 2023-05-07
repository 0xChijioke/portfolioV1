import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}

    animate={{
      scale: [1, 2, 3, 1],
      opacity: [0.1, 0.2, 0.4, 0.0, 0.1, 1.0],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    }}

    transition={{
      duration: 2.5,
    }}
    
    className='relative overflow-hidden flex justify-center items-center mt-20'>
        <div className="absolute border border-orange-400 rounded-full h-[200px] w-[200px] animate-ping mt-[190px]" />
        <div className="absolute border border-purple-900 rounded-full h-[300px] w-[300px] mt-[190px]" /> 
        <div className="absolute border border-purple-900 rounded-full h-[400px] w-[400px] mt-[190px]" />
        <div className="absolute border border-orange-400 rounded-full h-[500px] w-[500px] opacity-20 animate-pulse mt-[190px]" />
        <div className="absolute border border-gray-400 rounded-full h-[600px] w-[600px] mt-[190px]" />
        
    </motion.div>
  )
}

export default BackgroundCircles; 