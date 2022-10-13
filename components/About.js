import React from 'react';
import Image from 'next/Image';

const About = () => {
  return (
    <div className='h-screen px-10 py-24 flex flex-col md:flex-row'>

        {/* //todo1 */}

        <div className='space-y-5'>

            <p className='text-effectColor uppercase'>About</p>

            <h2>
                Who I Am 
            </h2>

            <p className='max-w-[90%] md:max-w-[75%]'>
                Exercitation cupidatat pariatur occaecat tempor duis labore elit proident excepteur. Labore non dolor deserunt magna dolore consequat culpa dolore magna irure. Reprehenderit eiusmod cupidatat enim velit minim incididunt ut id velit minim aute. 
            </p>

            <p className='underline cursor-pointer hover:text-effectColor'>Check out some of my latest projects</p>

        </div>

        {/* //todo2 */}

        {/* my photo for big screen */}

        <div className='hidden md:flex mt-5 p-3 rounded-xl shadow-lg shadow-gray-500 w-fit h-fit hover:scale-[1.1]'>

            <Image className='rounded-xl' src="/../public/MR.webp" alt="" width={'550'} height={'750'}/>

        </div>

        {/* my photo for small screen  */}

        <div className='md:hidden mt-5 p-3 rounded-full shadow-lg shadow-gray-500 w-fit h-fit hover:scale-[1.1] mx-auto'>

            <Image className='rounded-full' src="/../public/MR.webp" alt="" width={'250'} height={'250'}/>

        </div>
      
    </div>
  )
}

export default About
