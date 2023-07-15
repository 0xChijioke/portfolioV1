import Link from "next/link";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import CJ from "../assets/CJ.jpg";
import { motion } from "framer-motion";




type Props = {}

function Hero({ }: Props) {
  
  const [text, count] = useTypewriter({
    words: [
      "Hey! I build web3 products.",
      "Very fast prototyping.",
      "Let's ship together!",
    ],
    loop: true,
    delaySpeed: 3000,
  })

  
// A utility function to help scroll to a section
// through the buttons because just using the ID's
// are not working in prod, potentially because of 
// how next bundle the javascript.
function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  const element = event.currentTarget;
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Add a small delay to re-enable the button after scrolling
  // element.disabled = true;
  // setTimeout(() => {
  //   element.disabled = false;
  // }, 500);
}

  return (
    <div className="flex flex-col w-full relative space-y-8 items-center justify-center text-center snap-y snap-start overflow-hidden">
        <BackgroundCircles />
        <Image
          className="relative w-[200px] h-[200px] z-20 rounded-full mx-auto object-cover" 
          src={CJ}
          alt="CJ"
          placeholder="blur"
          priority 
        />
        <div className="z-20 space-y-9 px-2">
          <h2 className="text-base uppercase text-gray-500 pb-2 tracking-[15px]  whitespace-normal">
              Chijoke Ogbuanya
          </h2>
          <div className="flex-grow w-full justify-center items-center">
            <h1 className="text-xl lg:text-4xl font-semibold px-5">
                <span className="mr-1">{text}</span>
                <Cursor cursorColor="#FFFFFF" />
            </h1>            
          </div>
          <div className="pt-5 space-x-2">
            <Link href="#" onClick={(e) => scrollToSection(e, "about")}>
              <button className="heroButton">About</button>
            </Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "experience")}>
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "skills")}>
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "projects")}>
              <button className="heroButton">Projects</button>
            </Link>
            <Link href="#" onClick={(e) => scrollToSection(e, "contact")}>
              <button className="heroButton">Contact</button>
            </Link>
          </div>
        </div>
        {/* <div className='absolute xs:bottom-10 -bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </div>
  )
}

export default Hero;