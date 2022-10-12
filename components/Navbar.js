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

            <div className='fixed w-full h-20 shadow-xl flex justify-between items-center px-5'>

                
                <h1 className='text-[#5651e5] drop-shadow-lg shadow-gray-900 font-medium  italic '>MR</h1>


                <ul className='hidden uppercase space-x-10 md:flex md:flex-row'>
                    <li className='hover:text-[#5651e5]'>
                        <Link href="#">Home</Link>
                    </li>
                    <li className='hover:text-[#5651e5]'>
                        <Link href="#">About</Link>
                    </li>
                    <li className='hover:text-[#5651e5]'>
                        <Link href="#">Skills</Link>
                    </li>
                    <li className='hover:text-[#5651e5]'>
                        <Link href="#">projects</Link>
                    </li>
                    <li className='hover:text-[#5651e5]'>
                        <Link href="#">Contact</Link>
                    </li>
                </ul> 

                <div onClick={sideNav} className='cursor-pointer hover:scale-[1.1] md:hidden'>
                   <GiHamburgerMenu size={'30px'}/>
                </div>    
            
            </div>


            <div className={nav?'fixed w-full h-screen bg-black/50 md:hidden':'hidden'}>

                    <div className='w-[75%] md:w-[60%] lg:w-[45%] h-screen bg-[#ecf0f3] flex flex-col justify-between p-7'>



                        <div className='flex justify-between items-center'>

                            <h1 className='text-[#5651e5] drop-shadow-lg shadow-gray-900 font-medium  italic'>MR</h1>

                            <div onClick={sideNav} className='rounded-full shadow-xl p-3 hover:scale-[1.1]'>
                                <AiOutlineClose size={'25px'}/>
                            </div>

                        </div>



                        <p className='text-xl pb-5 border-gray-300 border-b-[2px]'>
                            Let&apos;s build something legendary together
                        </p>



                        <ul className='uppercase flex flex-col space-y-5'>
                            <li className='hover:text-[#5651e5]'>
                                <Link href="#">Home</Link>
                            </li>
                            <li className='hover:text-[#5651e5]'>
                                <Link href="#">about</Link>
                            </li>
                            <li className='hover:text-[#5651e5]'>
                                <Link href="#">skills</Link>
                            </li>
                            <li className='hover:text-[#5651e5]'>
                                <Link href="#">projects</Link>
                            </li>
                            <li className='hover:text-[#5651e5]'>
                                <Link href="#">contact</Link>
                            </li>
                        </ul>



                        <div className='flex flex-col space-y-5'>

                            <p className='text-[#5651e5] uppercase'>Let&apos;s Connect</p>

                            <div className='-ml-6 xs:ml-0 flex space-x-2'>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg p-3'>
                                    <FaLinkedinIn size={'20px'}/>
                                </div>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg p-3'>
                                    <BsGithub size={'20px'}/>
                                </div>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg p-3'>
                                    <AiOutlineMail size={'20px'}/>
                                </div>

                                <div className='hover:scale-[1.1] rounded-full shadow-lg p-3'>
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
