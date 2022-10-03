import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import placeHolderImage from "../assets/placeholder.jpg";
import Image from 'next/image';


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hey! My name is Chijioke","I'm a Hacker", "A Builder", "A Fren"],
        loop: true,
        delaySpeed: 3000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
          className='relative rounded-full mx-auto object-cover' src={placeHolderImage} height={200} width={200} alt="Gord" />
        <div>
          <h1>
              <span>{text}</span>
              <Cursor />
          </h1>
        </div>
    </div>
  )
}

export default Hero;