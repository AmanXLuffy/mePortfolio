import React from 'react';
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className="flex flex-col items-center justify-center gap-10 text-white">


        <motion.div
        initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}
        >
        <a href='https://drive.google.com/file/d/1FS4p476eG8-ReB9rXJ7_kMV4qsWYv0ms/view?usp=drive_link' target='_blank'> <img src="/assets/img1.jpg" alt='' className=' cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-indigo-600 md:w-[350px] w-[300px] rounded-full '></img> </a>
        </motion.div>


        <motion.div 
        initial={{y: 50, opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}

        
        className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
          <h1 className='bg-gradient-to-r from-blue-500 via-gray-500 to-pink-500 bg-clip-text text-transparent font-light text-5xl md:text-7xl'>Aman Solanki</h1>


          <h3 className='bg-gradient-to-r from-blue-500 via-gray-500 to-pink-500 bg-clip-text text-transparent text-2xl md:text-4xl'>MERN Stack Developer</h3>


          <p className='md:text-base text-sm text-gray-400 text-thin'>I am a Web Developer skilled in javascript, React JS,Node JS, Express JS and tailwind CSS, focused on building clean and scalabel application. I create efficient solutions for dynamic user experience. I am excited to delve deeper into my field, seeking to explore every facet and apply the knowledge I have gained so far. Let's build something great together.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
