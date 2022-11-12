import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='snap-center flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] bg-[#13094b] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity durantion-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src='https://via.placeholder.com/300'
            alt='experience' 
            className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>Fullstack</h4>
                <p className='font-bold text-xl mt-1'>BuidlGuidl</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-5 w-5 rounded-full'
                        src='https://via.placeholder.com/300'
                        alt='image'
                        />
                    <img className='h-5 w-5 rounded-full'
                        src='https://via.placeholder.com/300'
                        alt='image'
                        />
                    <img className='h-5 w-5 rounded-full'
                        src='https://via.placeholder.com/300'
                        alt='image'
                        />
                    <img className='h-5 w-5 rounded-full'
                        src='https://via.placeholder.com/300'
                        alt='image'
                        />
                </div>
                <p className='uppercase py-5 text-gray-300 text-md'>Started work... - Ended...</p>

                <ul className='list-disc space-y-4 ml-5 text-sm'>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
    </article>
  )
}

export default ExperienceCard;