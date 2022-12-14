import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div id="about" className='px-10 pt-20 flex flex-col md:flex-row'>

        {/* //todo1 */}

        <div className='space-y-5'>

            <p className='text-effectColor uppercase tracking-widest'>About</p>

            <h2>
                Who I Am 
            </h2>

            <p className='max-w-[90%] md:max-w-[75%]'>

            &#128516; I&apos;m not your normal developer <br/>

            &#128516; I am currently in my last year in informatics engineering , this is my second year in <span className='text-effectColor'>Front-End</span> Web Development and I just started with <span className='text-effectColor'>machine learning</span> technique.<br/>

            &#128516; I previously participated in the university programming competition ( <span className='text-effectColor'>ICPC</span> ) for two years.<br/>

            &#128516; I have the <span className='text-effectColor'>desire</span> , the <span className='text-effectColor'>passion</span> and the ability to <span className='text-effectColor'>learn quickly</span>.
            </p>

            <p className='underline cursor-pointer hover:text-effectColor'>
                <Link href="/#projects">Check out some of my latest projects</Link>
            </p>

        </div>

        {/* //todo2 */}

        {/* my photo for big screen */}

        <div className='hidden md:flex mt-5 p-3 rounded-xl shadow-lg shadow-shadowColor w-fit h-fit hover:scale-[1.1]'
        >

            <img className='rounded-xl w-[700px] h-[450px] lg:w-[450px]' src="MR.webp" alt=""/>

        </div>

        {/* my photo for small screen  */}

        <div className='md:hidden mt-5 p-3 rounded-2xl mx-auto shadow-lg shadow-shadowColor w-fit h-fit hover:scale-[1.1]'>

            <img className='rounded-2xl w-[180px]  h-[180px] xs:w-[250px] xs:h-[200px]' src="MR.webp" alt=""/>

        </div>
      
    </div>
  )
}

export default About
