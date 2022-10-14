import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='px-10 pt-20 space-y-7'>

      <p className='text-effectColor uppercase tracking-widest'>projects</p>

      <h2>What I&apos;v Built</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>

        <ProjectItem title='Shoppingo' tech='React' img='shoppingo.png' url='#' />
        <ProjectItem title='Landing Page' tech='Next' img='landing-page.png' url='#' />
       

      </div>
      
    </div>
  )
}

export default Projects
