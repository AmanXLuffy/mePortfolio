import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Tech from './Tech'
import Projects from './Projects'
import Contact from './Contact'
// import SkillBarChart from './SkillBarChart'
// import SkillPieChart from './SkillPieChart'
import Skills from './Skills'

const Home = () => {
  return (
    <>
    <div>
        
    <main className=" font-bold"> 
      <Navbar />
      <Hero />
      <Tech />
      {/* <SkillBarChart /> */}
      {/* <SkillPieChart /> */}
      <Skills />
      <Projects />
      <Contact />
    </main>

    </div>
    </>
    
  )
}

export default Home
