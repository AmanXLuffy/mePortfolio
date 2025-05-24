import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp,BsX, BsMenuButton} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

const menuOpen = () => {
  if (!isOpen) {
    window.addEventListener('resize', handleResize);
  } else {
    window.removeEventListener('resize', handleResize);
  }
  setIsOpen(!isOpen);
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    setIsOpen(false);
    window.removeEventListener('resize', handleResize);
  }
};

  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-slate-50 backdrop-blur-md md:justify-evenly'>
      <a href='#home' className='bg-gradient-to-r from-blue-500 via-gray-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>PortFolio</a>


      <ul className='hidden md:flex gap-10'> 
        <a href='#home' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Home</li></a>
        <a href='#tech' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Tech</li></a>
        <a href='#projects' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Projects</li></a>
        <a href='#contact' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Contact</li></a>
      </ul>

      
      <ul className='hidden md:flex gap-5 md:pl-4'>
       <a href='https://www.facebook.com/profile.php?id=100054057791444' target='_blank'> <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-blue-500 hover:opacity-100'> <BsFacebook/> </li> </a>
       <a href='https://wa.me/9173515355' target='_blank'> <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-green-500 hover:opacity-100'> <BsWhatsapp/></li> </a>
       <a href='https://github.com/AmanXLuffy' target='_blank'> <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-sky-500 hover:opacity-100'> <BsGithub/> </li> </a>
       <a href='#' target='_blank'> <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-pink-500 hover:opacity-100'> <BsInstagram/></li></a>
        </ul>


        {isOpen ? (
          <BsX className='block md:hidden text-4xl' onClick={menuOpen}/>
        ) : (
          <BsMenuButton className='block md:hidden text-4xl' onClick={menuOpen} />
        )}


        {isOpen && (
          <div className={`fixed right-0 top-[121px] flex min-h-screen w-30 flex-col items-start opacity-90 hover:opacity-100 justify-start gap-10 rounded-bl-md border-gray-800 bg-black/90 p-12`}>
            <ul className='flex flex-col gap-6'>
                <a href='#home' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Home</li></a>
                <a href='#tech' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Tech</li></a>
                <a href='#projects' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Projects</li></a>
                <a href='#contact' className='cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100'><li>Contact</li></a>
            </ul>

          <ul className='flex flex-wrap gap-5'>
             <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-blue-500 hover:opacity-100'> <BsFacebook/> </li>
             <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-green-500 hover:opacity-100'> <BsWhatsapp/> </li>
             <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-sky-500 hover:opacity-100'> <BsGithub/> </li>
             <li className=' cursor-pointer opacity-50 transition-all duration-300 hover:text-pink-500 hover:opacity-100'> <BsInstagram/></li>
          </ul>
          </div>
        )}

    </nav>
  )
}

export default Navbar
