import React,{useState} from 'react';
// import image1 from "../pictures/img1.jpg";
// import { motion } from 'framer-motion';



const projectData = [
  {
    image: "/assets/rescue.png",
    title :"Rescue Paws",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur velit error temporibus modi voluptatibus esse mollitia porro magni laborum dolorum vero cum facere placeat, adipisci nulla voluptates neque numquam.",
    technologies: ["React js", "Express js", "MongoDB", "Tailwind CSS"],
  },
  
  {
    image: "/assets/Dashboard.png",
    title :"E-com Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur velit error temporibus modi voluptatibus esse mollitia porro magni laborum dolorum vero cum facere placeat, adipisci nulla voluptates neque numquam.",
    technologies: ["CSS", "HTML", "Bootstrap"],
  },

  {
    image: "/assets/webdashboard.png",
    title :"WEB NEWS",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur velit error temporibus modi voluptatibus esse mollitia porro magni laborum dolorum vero cum facere placeat, adipisci nulla voluptates neque numquam.",
    technologies: ["JavaScript", "HTML", "CSS","API"],
  }

]


const ProjectCard = ({projectData})=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  return(
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' src={projectData.image} alt='' />

      <div className='flex-flex-col gap-5'>
          <div className='flex flex-col ml-2 gap-3'>
        <div className='text-xl font-semibold'>{projectData.title}</div>
        <p className='text-gray-400'>{projectData.description}</p>
        </div>
        </div>
        <div className='flex flex-wrap gap-4'>
          {
            projectData.technologies.map((tech,index)=>(
              <span key={index} className='rounded-lg bg-black p-3 hover:bg-gray-800 transition-all duration-300'>
                {tech}
              </span>
            ))
          }
        </div>
      </div>
  )
}

const Projects = () => {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 md:px:14'>
      <h1 className='text-4xl font-light text-white md:text:6xl'>My Projects</h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectData.map((project,index)=>(
            <ProjectCard key={index} projectData={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects;

