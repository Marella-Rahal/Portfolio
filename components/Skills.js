import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className='px-10 pt-20 space-y-7 select-none'>
      <p className='text-effectColor tracking-widest uppercase'>skills</p>
      <h2>What I Can Do</h2>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {/* html */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/html.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='html.png' alt=''/>
            <h3 className='text-end'>Html</h3>
        </div>

        {/* css */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/css.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='css.png' alt=''/>
            <h3 className='text-end'>CSS</h3>
        </div>


        {/* tailwind */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/tailwind.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='tailwind.png' alt=''/>
            <h3 className='text-end'>Tailwind</h3>
        </div>

        
        {/* javascript */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/javascript.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='javascript.png' alt=''/>
            <h3 className='text-end'>Javascript</h3>
        </div>


        {/* react */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/react.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='react.png' alt=''/>
            <h3 className='text-end'>ReactJS</h3>
        </div>

        {/* next */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/nextjs.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='nextjs.png' alt=''/>
            <h3 className='text-end'>NextJS</h3>
        </div>

        {/* redux */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/redux.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='redux.png' alt=''/>
            <h3 className='text-end'>ReduxJS</h3>
        </div>


        {/* framer-motion */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/framer-motion.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='framer-motion.png' alt=''/>
            <h3 className='text-end'>Framer-Motion</h3>
        </div>

        {/* MapBox */}
        <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            {/* <Image src='/../public/mapbox.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='mapbox.png' alt=''/>
            <h3 className='text-end'>MapBox</h3>
        </div>

        {/* github */}
        {/* <div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.03]'
        >
            <Image src='/../public/github.png' alt="" width={'50'} height={'50'}/>
            <img className='w-[55px]' src='github.png' alt=''/>
            <h3 className='text-end'>Github</h3>
        </div> */}

      </div>

    </div>
  )
}

export default Skills;
