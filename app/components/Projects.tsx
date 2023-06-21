// app/components/Projects.tsx
"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
};

function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    
    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await fetch("/api", {
              method: "GET",
            });
    
            if (!response.ok) {
              throw new Error("Failed to fetch projects");
            }
            const data = await response.json(); 
            setProjects(data);
          } catch (error) {
            console.error("Error retrieving projects:", error);
          }
        };
    
        fetchProjects();
      }, []);
    
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll outline-none overflow-y-hidden snap-x scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-violet-500 snap-mandatory z-20">
            {projects && projects.map((project, i) => (
                    <div key={project.id} className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-7 md:p-44 h-screen">
                        <motion.img
                            initial={{ y: -200 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            src={project.image}
                            width={200}
                            height={200}
                            alt="project"
                            className="pt-20 md:pt-0 md:-mb-0 -mb-8"
                        />
                        <div className="md:space-y-10 space-y-3 px-0 md:px-10 max-w-6xl">
                            <h4 className="font-semibold text-xl md:text-4xl text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                {project.description}
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