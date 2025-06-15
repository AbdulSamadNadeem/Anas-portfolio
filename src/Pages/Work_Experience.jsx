import React, { useRef } from 'react'
import Work_Stack from '../Components/Work_Stack/Work_Stack'
import Project from '../Components/Projects/Project'


const Work_Experience = () => {
  const lab = useRef(null)
  return (
    <div className='h-screen'>
      <div ref={lab}>

       <Work_Stack/>
      </div>
      <div ref={lab}>

       <Project/>
      </div>
       
    </div>
  )
}

export default Work_Experience