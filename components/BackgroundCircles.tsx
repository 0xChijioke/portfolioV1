import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative'>
        <div className="border border-orange-400 rounded-full h-[200px] w-[200px] animate-ping"></div>
        <div></div>
        <div />
        <div />
        <div />
    </div>
  )
}

export default BackgroundCircles; 