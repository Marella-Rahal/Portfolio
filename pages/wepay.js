import React from 'react';
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

const wepay = () => {
   
  return (
    <div>
      
        <div className='relative shadow-xl shadow-shadowColor'>
            <img className='h-[350px] w-full opacity-30' src='wepay.png' alt=""/>
            <div className='absolute top-[70%] left-[10%]'>
                <h2>
                    Wepay
                </h2>
                <p className='mt-2 pl-3'>
                    NextJS
                </p>
            </div>
        </div>

        <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row my-20 mx-[10%] justify-between md:items-center'>

            {/* left */}
            <div className='md:w-[50%]'>

                <p>
                    Project
                </p>

                <h2>
                    Overview
                </h2>

                <p className='mt-4'>
                Introducing an online payment solutions website tailored for Syria. Users can easily make deposits using a variety of methods, with the option to initiate withdrawals through the same convenient channels.<br/>

                For seamless payment and transfer transactions on the platform, users can either scan a unique QR code or manually input the code. In both options, users are required to input the transfer amount and their secure PIN code.<br/>

                A personalized QR code, unique to each user, is housed in their profile, alongside other information. The profile also contains a promotion button, allowing users to elevate their status to a merchant, only if their account balance exceeds 5,000 Syrian pounds.<br/>

                Upon becoming a merchant, their store's location is showcased on the map along with other stores, informing users of the merchant's acceptance of payments through WePay.<br/>

                The platform also features a dedicated budget management section. This area hosts a comprehensive record of all user activities, complete with a chart illustrating expenses over the current year, month, or day, within the WePay site.<br/>

                In addition to tracking activities, users can add their personal payments, such as debts or monthly installments, within this section. Regardless of whether these payments are facilitated through WePay, the platform acts as a reminder to fulfill these obligations.<br/><br/>

                The backend has been developed by my teammate using Node.js and MongoDB, with a distinct approach from Next.js, operating independently.  
                </p>

                <div className='mt-5'>
                    <button className='uppercase text-white mr-4 px-5 py-2 hover:scale-[1.1]'>
                        <Link href="https://wepay-marella-rahal.vercel.app/">
                            demo                        
                        </Link>
                    </button>

                    <button className='uppercase text-white px-5 py-2 hover:scale-[1.1]'>
                        <Link href="https://github.com/Marella-Rahal/wepay-ui">
                            code
                        </Link>
                    </button>

                </div>

            </div>


            {/* right */}
            <div className='flex flex-col  rounded-xl shadow-xl shadow-shadowColor p-5 space-y-2 select-none'>

                <p className='font-bold text-center'>Technologies</p>


                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>CSS</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Tailwind CSS</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Javascript</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>ReactJS</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>NextJS</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>ReduxJS-Toolkit</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Next-Redux-Wrapper</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Axios</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Framer-Motion</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>MapBox Gl</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Chart.JS</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>React-Chartjs-2</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>Next-Qrcode</p>
                </div>

                <div className='flex items-center'>
                    <RiRadioButtonFill/> 
                    <p className='ml-2'>React-Qr-Reader</p>
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

export default wepay
