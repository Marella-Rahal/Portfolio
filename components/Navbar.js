import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineClose,AiOutlineMail} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsGithub,BsFillPersonLinesFill} from 'react-icons/bs';
const Navbar = () => {

  const [nav,setNav]=useState(false);
  
  const sideNav=()=>{
    setNav(prev=>!prev)
  }

  return (

    <>

            <div className='bg-bgColor/50 fixed z-[100] w-full h-20 shadow-md shadow-shadowColor flex justify-between items-center px-5'>

                
                <h1 className='text-effectColor drop-shadow-lg shadow-shadowColor font-medium '>MR</h1>


                <ul className='hidden uppercase space-x-10 md:flex md:flex-row'>
                    <li className='hover:text-effectColor'>
                        <Link href="#">Home</Link>
                    </li>
                    <li className='hover:text-effectColor'>
                        <Link href="#">About</Link>
                    </li>
                    <li className='hover:text-effectColor'>
                        <Link href="#">Skills</Link>
                    </li>
                    <li className='hover:text-effectColor'>
                        <Link href="#">projects</Link>
                    </li>
                    <li className='hover:text-effectColor'>
                        <Link href="#">Contact</Link>
                    </li>
                </ul> 

                <div onClick={sideNav} className='cursor-pointer hover:scale-[1.1] md:hidden'>
                   <GiHamburgerMenu size={'30px'}/>
                </div>    
            
            </div>


            <div className={nav?'fixed z-[100] left-0 top-0 w-full h-screen bg-black/50 md:hidden':''}>

                    <div className={nav?'fixed z-[100] left-0 top-0 w-[75%] md:w-[60%] lg:w-[45%] h-screen bg-[#ecf0f3] flex flex-col p-7 space-y-8 ease-in duration-500':'fixed z-[100] left-[-100%] top-0 w-[75%] md:w-[60%] lg:w-[45%] h-screen bg-[#ecf0f3] flex flex-col p-7 space-y-8 ease-in duration-300'}>



                        <div className='flex justify-between items-center'>

                            <h1 className='text-effectColor drop-shadow-lg shadow-shadowColor font-medium'>MR</h1>

                            <div onClick={sideNav} className='rounded-full shadow-lg shadow-shadowColor p-3 hover:scale-[1.1]'>
                                <AiOutlineClose size={'25px'}/>
                            </div>

                        </div>



                        <p className='text-xl pb-5 border-gray-300 border-b-[2px]'>
                            Let&apos;s build something legendary together
                        </p>



                        <ul className='uppercase flex flex-col space-y-5'>
                            <li className='hover:text-effectColor'>
                                <Link href="#">Home</Link>
                            </li>
                            <li className='hover:text-effectColor'>
                                <Link href="#">about</Link>
                            </li>
                            <li className='hover:text-effectColor'>
                                <Link href="#">skills</Link>
                            </li>
                            <li className='hover:text-effectColor'>
                                <Link href="#">projects</Link>
                            </li>
                            <li className='hover:text-effectColor'>
                                <Link href="#">contact</Link>
                            </li>
                        </ul>



                        <div className='flex flex-col space-y-5'>

                            <p className='text-effectColor uppercase'>Let&apos;s Connect</p>

                            <div className='-ml-6 xs:ml-0 flex space-x-2'>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg shadow-shadowColor p-3'>
                                    <FaLinkedinIn size={'20px'}/>
                                </div>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg shadow-shadowColor p-3'>
                                    <BsGithub size={'20px'}/>
                                </div>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg shadow-shadowColor p-3'>
                                    <AiOutlineMail size={'20px'}/>
                                </div>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg shadow-shadowColor p-3'>
                                    <BsFillPersonLinesFill size={'20px'}/>
                                </div>

                            </div>

                        </div>




                    </div>

            </div>

       
    </>
  )
}

export default Navbar
