import React from 'react';
import {motion} from "framer-motion";
import TypeWriter from './TypeWriter';

const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className="flex flex-row items-center justify-center gap-10 text-white">

        <motion.div
        initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}>
        <a href='https://drive.google.com/file/d/1FS4p476eG8-ReB9rXJ7_kMV4qsWYv0ms/view?usp=drive_link' target='_blank'> <img src="/assets/aman.jpg" alt='' className=' cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-indigo-600 md:w-[350px] w-[300px] rounded-full '></img> </a>
        </motion.div>


        <motion.div 
        initial={{y: 50, opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}
        className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>

          <h1 className='bg-gradient-to-r from-blue-500 via-gray-500 to-pink-500 bg-clip-text text-transparent font-light text-5xl md:text-7xl'>Aman Solanki</h1>

          <TypeWriter />

          <p className='md:text-base text-sm font-extrabold text-justify text-gray-400 text-thin'>I am a Web Developer skilled in javascript, React JS, Express JS, Mongo DB and Tailwind CSS, focused on building clean and scalable application. I am excited to delve deeper into my field, seeking to explore every facet and apply the knowledge I have gained so far. 
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
