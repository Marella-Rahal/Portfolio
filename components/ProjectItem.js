import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title,tech,img,url}) => {
  return (
    <div className='p-5 relative rounded-xl shadow-xl shadow-shadowColor group hover:bg-gradient-to-r from-gradientFrom to-gradientTo h-[300px] sm:h-[400px]'>

        <img className='h-[260px] sm:h-[360px] rounded-xl group-hover:opacity-5' src={img} alt=''/>

        <div className='hidden group-hover:block text-bgColor text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] space-y-5'>

            <h3>{title}</h3>

            <p>{tech}</p>

            <div className='bg-bgColor text-textColor font-bold rounded-xl  cursor-pointer py-3 hover:scale-[1.1]'>
                <Link href={url}>More Info</Link>
            </div>
            

        </div>
      
    </div>
  )
}

export default ProjectItem
