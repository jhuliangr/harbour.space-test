import React from 'react'
import { description } from '../../constants'

function Body() {
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-40 gap-10'>
                <div className='flex w-full justify-start md:mx-10'>
                    <div className='md:text-5xl  text-4xl text-left text-main font-medium '>
                        <p>Interaction Design</p>
                        <p>Apprenticeship</p>
                    </div>
                    <img src="/image.png" alt="interaction_design" className='md:w-[240px] md:h-[240px] w-[150px] h-[150px] absolute md:mt-[-5.3rem] mt-[-4.5rem] md:ml-[14.8rem] ml-[11rem] z-[-1]' />
                </div>
                <div>
                    <div className='text-left grid md:grid-cols-2 md:w-[50%]'>
                        <div className='flex md:flex-col'>
                            <p className='text-[#7F7F7F] md:text-[18px] mb-2'>Powered by:</p>
                            <p className='md:text-3xl ml-1'>Zeptolab</p>
                        </div>
                        <div className='md:order-first'>
                            <img src="/logo.png" alt="zeptolab_logo" className='object-cover w-20 h-20' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-10'>
                <div className='text-2xl text-left md:mx-10 order-2 md:order-1 mx-5 mt-10'>
                    <p className='font-medium'>
                        A fully funded work-study program to launch your tech career
                    </p>
                    <p className='mt-10 font-light'
                    style={{fontFamily: 'Apercu Pro Thin'}}>
                        Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.
                    </p>
                    <div className='flex mt-10'>
                        <p className='font-medium'>
                            Position:
                        </p>
                        Marketing Performance
                    </div>
                    <div className='flex mt-12'>
                        <div className='bg-main rounded-full text-white text-center  py-5 px-10'>
                            Apply Now
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex flex-col order-1 md:order-2 md:mt-[-1.5rem]'>
                    <div className='flex border-2 border-[#DADADA] justify-center rounded-md'>
                        <div className='px-10 py-5 text-left'>
                            <p className='text-main text-lg'>
                                Application closes in
                            </p>
                            <p className='text-xl mt-3 h-8 overflow-clip'>
                                6 Day  :  22 Hrs  :  56 Min  :  13 Seg
                            </p>
                        </div>
                    </div>
                    <div className='px-10 py-5 border-2 border-[#DADADA] mt-5 text-center flex flex-col justify-center bg-white rounded-md'>
                        <div className='grid grid-cols-2'>
                            <img src="/background.png" alt="background_detail" className='absolute z-[-1] right-0 hidden md:block' />
                            {description.map(item =>
                                <div className='text-left'>
                                    <p className='text-main'>{item.title}</p>
                                    <p className=''>{item.text}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Body


{/*  */ }



