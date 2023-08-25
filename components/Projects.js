import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id="projects" className='px-10 pt-20 space-y-7'>

      <p className='text-effectColor uppercase tracking-widest'>projects</p>

      <h2>What I&apos;v Built</h2>

      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 xl:p-10'>

        {/* <ProjectItem title='Shoppingo' tech='React.Js' img='shoppingo.png' url="/shoppingo" /> */}
        <ProjectItem title='Landing Page' tech='Next.Js' img='landing-page.png' url="/landingPage" /> 
        <ProjectItem title='Shoppingo' tech='NextJS' img='shoppingo-2.png' url="/shoppingo"/>
        <ProjectItem title='Wepay' tech='NextJS' img='wepay.png' url="/wepay"/>

      </div>
      
    </div>
  )
}

export default Projects
