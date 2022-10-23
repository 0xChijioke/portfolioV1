import React from 'react';

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i) => (
                <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <img
                        src='https://via.placeholder.com/200'
                        alt='project'
                    />
                    <div>
                        <h4>
                            <span className='underline decoration-[#F7ABBA]/58'>Case Study {i + 1} of {projects.length}:
                            </span>
                        </h4>

                        <p className='text-lg text-center md:text-left'>
                        If the player is driving forwards and wants to stop, the brake/reverse key must be pressed. This causes the car brakes to operate. Once the car has come to rest, the reverse gear is automatically selected and the car will reverse.
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[180px] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'></div>
    </div>
  )
}

export default Projects;