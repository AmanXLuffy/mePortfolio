import React,{useState} from 'react';


const projectData = [
  {
    image: "/assets/rescue.png",
    title :"Rescue Paws",
    description: "Rescue P.A.W.S. is a full-stack web app for animal rescue, built using React, Express.js, and MongoDB with Clerk authentication. Key features include a volunteer registration form that stores data securely and an activities section showcasing ongoing rescue work. The frontend is on Vercel, and the backend is on Render.",
    technologies: ["React js", "Express js", "Mongo DB", "Tailwind CSS"],
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
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-5'>
      <img className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' src={projectData.image} alt='' />

      <div className='flex-flex-col gap-5'>
          <div className='flex flex-col ml-2 gap-3'>
        <div className='text-xl font-semibold'>{projectData.title}</div>
        <p className='text-gray-400'>{projectData.description}</p>
        </div>
        </div>
        <div className='flex flex-wrap gap-2'>
          {
            projectData.technologies.map((tech,index)=>(
              <span key={index} className='rounded-lg bg-gray-500 p-3 w-[110px] text-center hover:bg-gray-800 transition-all duration-300'>
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
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-14 md:px:14'>
      <h1 className='text-4xl font-light text-white md:text:6xl'>My Projects</h1>
      <div className="flex w-full max-w-[1000px] flex-col gap-14 text-white">
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

