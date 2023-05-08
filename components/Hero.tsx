"use client";
import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import placeHolderImage from "../assets/placeholder.jpg";


type Props = {}

function Hero({ }: Props) {
  
    const [text, count] = useTypewriter({
        words: ["Hey! My name is Chijoke.",
          "I'm passionate about Public Goods.",
          "I love creative coding </>",
          "I work with passionate people."
        ],
        loop: true,
        delaySpeed: 3000,
    })
  
  return (
    <div className="flex flex-col w-full space-y-8 items-center justify-center text-center snap-y snap-start overflow-hidden">
        <BackgroundCircles />
        <Image
          className="relative w-[200px] h-[200px] rounded-full mx-auto object-cover" 
          src={placeHolderImage}
          alt="CJ"
          placeholder="blur"
          priority 
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
              Software Engineer
          </h2>
          <div className="flex-grow w-full justify-center items-center">
            <h1 className="text-xl lg:text-4xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#FFFFFF" />
            </h1>            
          </div>
          <div className="pt-5 space-x-2 space-y-2">
            <Link href={"#about"}>
              <button className="heroButton">About</button>
            </Link>
            <Link href={"#experience"}>
              <button className="heroButton">Experience</button>
            </Link>
            <Link href={"#skills"}>
              <button className="heroButton">Skills</button>
            </Link>
            <Link href={"#projects"}>
              <button className="heroButton">Projects</button>
            </Link>
            <Link href={"#contact"}>
              <button className="heroButton">Contact</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Hero;