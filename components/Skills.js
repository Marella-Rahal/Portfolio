import Image from 'next/image';
import React from 'react';
import {motion} from 'framer-motion';

export const buttonVariants={
  hover:{
      scale:1.1,
      transition:{
          yoyo:Infinity
      }
  }
}

const Skills = () => {
  return (
    <div id="skills" className='px-10 pt-20 space-y-7'>
      <p className='text-effectColor tracking-widest uppercase'>skills</p>
      <h2>What I Can Do</h2>
      <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {/* html */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/html.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='html.png' alt=''/>
            <h3>Html</h3>
        </motion.div>

        {/* css */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/css.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='css.png' alt=''/>
            <h3>CSS</h3>
        </motion.div>


        {/* tailwind */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/tailwind.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='tailwind.png' alt=''/>
            <h3>Tailwind</h3>
        </motion.div>

        
        {/* javascript */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/javascript.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='javascript.png' alt=''/>
            <h3>Javascript</h3>
        </motion.div>


        {/* react */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/react.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='react.png' alt=''/>
            <h3>React</h3>
        </motion.div>

        {/* redux */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/redux.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='redux.png' alt=''/>
            <h3>Redux</h3>
        </motion.div>

        {/* next */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/nextjs.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='nextjs.png' alt=''/>
            <h3>Next</h3>
        </motion.div>

        {/* github */}
        <motion.div className='p-[10px] xs:p-7 flex items-center justify-between rounded-xl shadow-lg shadow-shadowColor hover:scale-[1.1]'
          variants={buttonVariants}
          whileHover="hover"
        >
            {/* <Image src='/../public/github.png' alt="" width={'50'} height={'50'}/> */}
            <img className='w-[55px]' src='github.png' alt=''/>
            <h3>Github</h3>
        </motion.div>

      </div>

    </div>
  )
}

export default Skills;
