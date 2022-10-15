import React from 'react';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const shoppingo = () => {
   
  return (
    <div>
      
        <div className='relative shadow-xl shadow-shadowColor'>
            <img className='h-[350px] w-full opacity-30' src='shoppingo.png' alt=""/>
            <div className='absolute top-[70%] left-[10%]'>
                <h2>
                    Shoppingo
                </h2>
                <p className='mt-2 pl-3'>
                    React.Js
                </p>
            </div>
        </div>

        <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row my-20 mx-[10%] justify-between'>

            {/* left */}
            <div className='md:w-[50%]'>

                <p>
                    Project
                </p>

                <h2>
                    Overview
                </h2>

                <p>
                    Labore adipisicing voluptate velit ea cillum anim dolore cillum excepteur. Sint anim fugiat nostrud eiusmod fugiat Lorem magna amet veniam aliqua quis est quis. Ad culpa consequat qui incididunt velit ullamco commodo mollit eiusmod 
                </p>

                <div className='mt-4'>
                    <button className='uppercase text-white mr-4 px-5 py-2 hover:scale-[1.1]'>
                        <Link href="https://shoppingo.vercel.app/">
                            demo                        
                        </Link>
                    </button>

                    <button className='uppercase text-white px-5 py-2 hover:scale-[1.1]'>
                        <Link href="https://github.com/Marella-Rahal/ShoppingoUI">
                            code
                        </Link>
                    </button>

                </div>

            </div>


            {/* right */}
            <div className='flex flex-col  rounded-xl shadow-xl shadow-shadowColor p-5 space-y-2'>

                <p className='font-bold text-center'>Technologies</p>


                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>React.Js</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>CSS</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Styled Components</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Javascript</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>React Router</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Redux</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>MapBox Gl</p>
                </div>

            </div>

        </div>

        <div className='my-20 mx-[12%] underline hover:text-effectColor'>

            <Link href="/#projects">
                Back
            </Link>

        </div>

    </div>
  )
}

export default shoppingo
