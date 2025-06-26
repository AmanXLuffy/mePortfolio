import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Tech from './Tech'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills/Skills'

const Home = () => {
  return (
    <>
    <div>
        
    <main className=" font-bold"> 
      <Navbar />
      <Hero />
      <Skills />
      <Tech />
      <Projects />
      <Contact />
    </main>

    </div>
    </>
    
  )
}

export default Home
