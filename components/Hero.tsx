import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hey! My name is Chijioke","I'm a Hacker", "A Builder", "A Fren"],
        loop: true,
        delaySpeed: 3000,
    })
  return (
    <div>
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor />
        </h1>
    </div>
  )
}

export default Hero