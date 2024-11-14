import React from 'react';
import { useDataContext } from '../../../context/DataContext';

function Section2() {
    const { data } = useDataContext();
    const apiData = data.scholarship;
    return (
        <section className='mt-[20vh]'>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='flex justify-center items-center'>
                    <img src="/frame.png" alt="frame" className='absolute z-[-1] w-[90vw] md:w-auto' />
                    <img src="/guy.png" alt="guy" className='rounded-full w-[70vw] md:w-auto z-10' />
                </div>
                <div className='md:mx-10 md:bg-transparent bg-main md:w-full w-[100vw] ml-[-2rem] md:ml-0 md:h-auto h-[80vh] md:mt-auto mt-[-18vh]'>
                    <div className='bg-white mx-5 pt-60 px-4 border-[#E6E6E6] border-[1px] md:border-0 rounded-b md:mt-0 mt-[-1rem]'>
                        <p className='text-main md:text-5xl text-4xl text-left'>
                            About the
                        </p>
                        <p className='text-main md:text-5xl text-4xl text-left'>
                            apprenticeships
                        </p>
                        <p className='mt-20 text-left text-lg'>
                            {apiData?.about[0]?.data}
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-[20vh] grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-4 md:gap-4 w-full h-auto'>
                <div className="md:col-span-1 md:row-span-3 md:flex md:flex-col justify-between md:border-[2px] rounded-md p-10 text-left w-full">
                    <div>
                        <p className='text-main text-xl font-medium'>Scholarship value</p>
                        <p className='md:text-6xl text-2xl font-light md:mt-10 '>
                            €{apiData?.total_value?.toLocaleString('es-ES')}
                        </p>
                    </div>
                    <div className='h-[2px] bg-slate-200 my-5 md:block hidden'></div>
                    <div className='border-1 border-t-slate-950 grid grid-cols-2 gap-8 py-10 md:py-0'>
                        <div>
                            <div className='flex'>
                                <p className='text-main md:text-xl text-2xl font-medium'>
                                    Tuition
                                </p>
                                <p className='text-main md:text-xl text-2xl font-medium md:block hidden'>
                                    covered
                                </p>
                            </div>
                            <p className='md:text-lg text-2xl'>
                                €{apiData?.tuition?.toLocaleString('es-ES')}
                            </p>
                        </div>
                        <div>
                            <p className='text-main md:text-xl text-2xl font-medium'>
                                Remaining
                            </p>
                            <p className='md:text-lg text-2xl'>
                                €{apiData?.remaining?.toLocaleString('es-ES')}
                            </p>
                        </div>
                        <div>
                            <p className='text-main md:text-xl text-2xl font-medium'>
                                Living stipend
                            </p>
                            <p className='md:text-lg text-2xl'>
                                €
                                {apiData?.stipend_per_year?.toLocaleString('es-ES')}
                                (
                                {apiData?.stipend_per_month}
                                /month)

                            </p>
                        </div>
                    </div>
                </div>

                <Cell title='Study commitment' bigText={`${apiData?.study_commitment} hours / day`} css="mb-5">
                    <p className='font-light'>{apiData?.study_commitment_text}</p>
                </Cell>

                <Cell title='Work commitment' bigText={`${apiData?.work_commitment} hours / day`} css="mb-5">
                    <p>
                        {apiData?.internship_commitment_text}
                    </p>
                </Cell>
                <div className='md:col-span-2 row-span-1 flex flex-col mt-[-0.5rem]'>
                    <div className='h-[2px] w-full bg-[#DADADA] flex items-center justify-center'>
                        <p className='bg-white w-auto px-5 font-medium'>
                            GRADUATION
                        </p>
                    </div>
                    <div className={` border-[2px] rounded-md p-10 text-left mt-10 h-full`}>
                        <p className='text-main text-xl font-medium'>
                            A full-time contract
                        </p>
                        <p className='p-5 text-2xl font-light ml-[-1.25rem]'>
                            1 Year / Full-Time
                        </p>
                        <div className='w-10 h-[2px] bg-slate-200 my-5'></div>
                        <p>
                            {'You’ll be guaranteed a 1 year contract with SCG upon graduation.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2


function Cell({
    title,
    bigText,
    children,
    colspan = "1",
    css
}: {
    title: string,
    bigText: string,
    children: React.ReactNode,
    colspan?: string,
    css?: string
}) {
    return (
        <div className={`md:col-span-${colspan} md:row-span-1 col-span-1 border-[2px] rounded-md p-10 text-left ${css}`}>
            <p className='text-main text-xl font-medium'>
                {title}
            </p>
            <p className='p-5 text-2xl font-light ml-[-1.25rem]'>
                {bigText}
            </p>
            <div className='w-10 h-[2px] bg-slate-200 my-5'></div>
            {children}
        </div>
    )
}