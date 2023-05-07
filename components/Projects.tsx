import { motion } from "framer-motion";

type Props = {}

function Projects({ }: Props) {
    const projects = [1,2,3,4,5];
  return (
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
          className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {projects.map((project, i) => (
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    
                    <motion.img
                        initial={{ y: -200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        // viewport={{ once: true }}
                        src="https://res.cloudinary.com/dk3o1hrxt/image/upload/v1683378215/cross_qjs0tw.png"
                        width={200}
                        height={200}
                        alt="project"
                        className="pt-20 md:pt-0 md:-mb-0 -mb-8"
                    />
                    <div className="md:space-y-10 space-y-3 px-0 md:px-10 max-w-6xl">
                        <h4 className="font-semibold text-xl md:text-4xl text-center">
                            <span className="underline decoration-[#F7AB0A]/50">Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                            Cross
                        </h4>

                        <p className="text-lg text-center md:text-left">
                            Cross is a decentralized application (dapp) that enables users to bridge their assets between Ethereum and Optimism and collect rare Cross NFTs(Non-Fungible Tokens) on the Ethereum blockchain. The app is built with Next.js and typescript on the frontend, and Solidity smart contracts on the backend."
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top-[180px] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  )
}

export default Projects;