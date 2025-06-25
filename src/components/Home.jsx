import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Tech from './Tech'
import Projects from './Projects'
import Contact from './Contact'
import SkillBarChart from './SkillBarChart'

const Home = () => {
  return (
    <>
    <div>
        
    <main className=" font-bold"> 
      <Navbar />
      <Hero />
      <Tech />
      <SkillBarChart />
      <Projects />
      <Contact />
    </main>

    </div>
    </>
    
  )
}

export default Home
