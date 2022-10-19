import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsGithub,BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { buttonVariants } from './Main';
import { buttonVariants as buttonVariants1 } from './Skills';

const Contact = () => {
  return (
    <div id="contact" className='px-10 pt-20 space-y-7'>

        <p className='text-effectColor tracking-widest uppercase'>contact</p>

        <h2>Get In Touch</h2>

        <div className='flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row'>

            {/* left */}
            <div className='flex flex-col p-5 rounded-xl shadow-xl shadow-shadowColor space-y-5'>

                <motion.img className='rounded-xl hover:scale-[1.1]' src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MXxhZXU2ckwtajZld3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" 
                    variants={buttonVariants1}
                    whileHover="hover"
                />

                <h2>Marella Rahal</h2>

                <p>Front-End Developer</p>

                <p>I am available for freelance or part-time positions.<br/>Contact me  and let&apos;s talk.</p>

                <p className='text-effectColor uppercase'>connect with me</p>

                <div className='flex justify-between  pt-3'>

                    <motion.div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <Link href="https://www.linkedin.com/in/marella-rahal-bb4a60224/">
                            <FaLinkedinIn size={'20px'}/>
                        </Link>
                    </motion.div>

                    <motion.div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <Link href="https://github.com/Marella-Rahal">
                            <BsGithub size={'20px'}/>
                        </Link>
                    </motion.div>

                    <motion.div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <AiOutlineMail size={'20px'}/>
                    </motion.div>

                    <motion.div className='hover:scale-[1.2] rounded-full shadow-lg shadow-shadowColor p-3'
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        <BsFillPersonLinesFill size={'20px'}/>
                    </motion.div>

                </div>

            </div>

            {/* right */}
            <form className='w-full flex flex-col p-5 rounded-xl shadow-xl shadow-shadowColor space-y-5'>

                {/* first row */}
                <div className='flex space-x-3'>

                    <div className='w-[50%] flex flex-col justify-between space-y-3'>
                        <label className='font-bold uppercase'>Name</label>
                        <input className='border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none' type="text"/>
                    </div>
                    <div className='w-[50%] flex flex-col justify-between space-y-3'>
                        <label className='font-bold uppercase'>Phone Number</label>
                        <input className='border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none' type="text"/>
                    </div>

                </div>

                {/* second */}

                <div className='flex flex-col space-y-3'>
                        <label className='font-bold uppercase'>Email</label>
                        <input className='border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none' type="email"/>
                </div>

                {/* third */}

                <div className='flex flex-col space-y-3'>
                        <label className='font-bold uppercase'>subject</label>
                        <input className='border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none' type="text"/>
                </div>

                {/* fourth */}

                <div className='flex flex-col space-y-3'>
                        <label className='font-bold uppercase'>message</label>
                        <textarea  className='border-2 border-shadowColor p-3 rounded-lg shadow-lg shadow-shadowColor focus:outline-none' rows={5}/>
                </div>

                {/* fifth */}

                <button className='uppercase p-4'>send message</button>


                
            </form>

        </div>

    </div>
  )
}

export default Contact
