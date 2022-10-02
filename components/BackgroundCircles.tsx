import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className="absolute border border-orange-400 rounded-full h-[200px] w-[200px] animate-ping"></div>
        <div className="absolute border border-orange-400 rounded-full h-[300px] w-[300px]"></div>
        <div className="absolute border border-orange-400 rounded-full h-[500px] w-[500px]"></div>
        <div className="absolute border border-orange-400 rounded-full h-[650px] w-[t650px] opacity-20 animate-pulse"></div>
    </div>
  )
}

export default BackgroundCircles; 