import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsGithub,BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
const Main = () => {
  return (

        <div className='pt-40 space-y-3 text-center'>

            <p className='uppercase'>
                Let&apos;s build somthing together
            </p>
            <h1>
                Hi,I&apos;m  
                <span className='text-effectColor'> Marella</span>
            </h1>
            <h1>
                A Front-End Web Developer
            </h1>
            <p className='max-w-xl mx-auto'>
                I&apos;m a front-end web developer specializing in building exceptional digital experiences. Currently, I&apos;m focused on building responsive front-end web applications while learning the deep learning technique
            </p>

            <div className='flex justify-center space-x-5 pt-3'>

                <div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'>
                    <Link href="https://www.linkedin.com/in/marella-rahal-bb4a60224/">
                        <FaLinkedinIn size={'20px'}/>
                    </Link>
                </div>

                <div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'>
                    <Link href="https://github.com/Marella-Rahal">
                        <BsGithub size={'20px'}/>
                    </Link>
                </div>

                <div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'>
                    <AiOutlineMail size={'20px'}/>
                </div>

                <div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'>
                    <BsFillPersonLinesFill size={'20px'}/>
                </div>

            </div>
        
        </div>
  )
}

export default Main
