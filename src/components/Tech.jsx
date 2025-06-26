import React from 'react'
import { BiLogoHtml5, BiLogoJavascript,BiLogoReact,BiLogoCss3,BiLogoNodejs,BiLogoTailwindCss, BiLogoGithub } from "react-icons/bi";
import { SiExpress, SiPostman, SiClerk   } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Tech = () => {
  const variants = {
    hidden: {opacity:0, y:50},
    visible:{opacity:1, y:0}
  }

  return (
    <div id='tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-10 md:gap-16'>
      <motion.h1
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration: 0.5}}
      className='text-4xl font-light text-white md:text-6xl'>Technologies</motion.h1>

      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>

        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <BiLogoHtml5 className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 hover:-translate-x-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <BiLogoCss3 className='cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <BiLogoJavascript className='cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <FaBootstrap  className='cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <BiLogoReact className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <BiLogoNodejs className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <BiLogoGithub className='cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <SiExpress className='cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[90px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <SiPostman className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[90px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <BiLogoMongodb className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[90px]' />
        </motion.div>


        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
        <SiClerk className='cursor-pointer text-[80px] text-gray-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[70px]' />
        </motion.div>
        

        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}>
         <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 hover:translate-x-5 sm:text-[100px] md:text-[120px]' />
         </motion.div>

        
      </div>
    </div>
  )
}

export default Tech
