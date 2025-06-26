import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = () => {

  const handleType = (count) => {
    console.log(count)
}

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }

  return (
    <div className='App'>
      <h1 className='text-2xl md:text-xl font-bold text-center text-gray-200'>
        
        I am {' '}
        <span className='bg-gradient-to-r from-blue-500 via-gray-500 to-pink-500 bg-clip-text text-transparent text-4xl md:text-4xl font-semibold'>
          
          <Typewriter
            words={['MERN Stack Developer', 'Web Designer', 'Freelancer', 'Software Developer']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  )
}

export default TypeWriter
