import { motion } from "framer-motion";
import BG from "../assets/JSgxkTBM_400x400.jpg";
import BGLogo from "../assets/BG.png";
import Image from "next/image";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] bg-[#13094b] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          src={BG}
          alt="experience"
          className="w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-contain"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Fullstack Builder</h4>
        <p className="mt-1 w-[160px] "><Image src={BGLogo} alt={"BuidlGUidl"} /></p>
        <div className="flex space-x-2 my-2">
          <Image
            className="h-5 w-5 rounded-full"
            width={5}
            height={5}
            src="https://via.placeholder.com/300"
            alt="image"
          />
          <Image
            className="h-5 w-5 rounded-full"
            width={5}
            height={5}
            src="https://via.placeholder.com/300"
            alt="image"
          />
          <Image
            className="h-5 w-5 rounded-full"
            width={5}
            height={5}
            src="https://via.placeholder.com/300"
            alt="image"
          />
          <Image
            className="h-5 w-5 rounded-full"
            width={5}
            height={5}
            src="https://via.placeholder.com/300"
            alt="image"
          />
        </div>
        <p className="uppercase py-5 text-gray-300 text-md">
          Started work: April &apos;22 - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm">
          <li>We are a group of Ethereum builders.</li>
          <li>Building prototypes, tutorials, products, etc.</li>
          <li>A focus on fast prototyping and shipping.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
