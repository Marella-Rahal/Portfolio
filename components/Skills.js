import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className='h-screen px-10 py-20 mt-48 xs:mt-0 space-y-7'>
      <p className='text-effectColor tracking-widest uppercase'>skills</p>
      <h2>What I Can Do</h2>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        {/* html */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/html.png' alt="" width={'100'} height={'100'}/>
            <h2>Html</h2>
        </div>

        {/* css */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/css.png' alt="" width={'100'} height={'100'}/>
            <h2>CSS</h2>
        </div>


        {/* tailwind */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/tailwind.png' alt="" width={'100'} height={'100'}/>
            <h2>Tailwind</h2>
        </div>

        
        {/* javascript */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/javascript.png' alt="" width={'100'} height={'100'}/>
            <h2>Javascript</h2>
        </div>


        {/* react */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/react.png' alt="" width={'100'} height={'100'}/>
            <h2>React</h2>
        </div>

        {/* redux */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/redux.png' alt="" width={'100'} height={'100'}/>
            <h2>Redux</h2>
        </div>

        {/* next */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/nextjs.png' alt="" width={'100'} height={'100'}/>
            <h2>Next</h2>
        </div>

        {/* github */}
        <div className='p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'>
            <Image src='/../public/github.png' alt="" width={'100'} height={'100'}/>
            <h2>Github</h2>
        </div>

      </div>
    </div>
  )
}

export default Skills;
