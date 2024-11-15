function Section3Item() {
    return (
        <div className='group flex flex-col bg-white md:p-10 p-5 border-[2px] border-[#DADADA] rounded-lg '>
            <div className='flex items-center justify-between '>
                <div className='flex items-center'>
                    <img 
                        src="/placeholder.png" 
                        alt="avatar"
                        className='rounded-full transition-transform duration-500 group-hover:scale-125'
                    />
                    <div className='text-left ml-3'>
                        <p>Irene Pereyra</p>
                        <p>Interaction Design Fellow &apos;19</p>
                    </div>
                </div>
                <div>
                    <img src="/linkedin.png" alt="linkedin_link" />
                </div>
            </div>
            <div className='flex justify-end mr-10'>
                <div className='bg-main text-white rounded-full px-10 py-3 font-medium text-lg'>
                    Drag
                </div>
            </div>
            <div className='text-left mt-10 md:mx-20 font-light pb-10'>
                <p className='text-2xl'>This Fellowship was a turning point in my career. I wouldn&apos;t be where I am today without the financial support and experienced offered through the program.</p>
                <p className='mt-5 text-lg '>
                    Education   ·   B.A. Visual Design
                </p>
            </div>
        </div>
    )
}

export default Section3Item;
