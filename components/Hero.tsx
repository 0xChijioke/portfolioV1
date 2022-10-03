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
        <Image src={placeHolderImage} width={300} height={300} />
        <h1>
            <span>{text}</span>
            <Cursor />
        </h1>
    </div>
  )
}

export default Hero;