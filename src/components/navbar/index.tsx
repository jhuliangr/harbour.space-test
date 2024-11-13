
function Navbar() {
    return (
        <nav className='w-[100vw] fixed top-0 left-0 bg-main px-10 text-white py-4 flex justify-between items-center'>
            <div className="flex">
                <p className='flex align-text-top text-[15px] md:text-xl font-medium'>
                    HARBOUR SPACE
                </p>
                <p className='flex align-text-top md:text-xs text-[8px]  ml-3 mt-1'>
                    /INTERACTION DESIGN
                </p>
            </div>
            <div className="flex">
                <div className="bg-[#4fa16c] right-[10%] mt-[-15px] absolute p-8 rounded-full font-medium hidden md:block">
                    <p>
                        APPLY
                    </p>
                    NOW
                </div>
                <div className="px-2 py-3 bg-[#523C94] md:bg-transparent">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center mb-[5px]">
                            <div className="w-2 h-2 mr-0 border-white border-[3px] bg-main absolute"></div>
                            <div className="w-8 h-[3px] bg-white"></div>
                        </div>

                        <div className="w-8 h-[3px] bg-white mb-[5px]"></div>

                        <div className="flex items-center">
                            <div className="w-8 h-[3px] bg-white"></div>
                            <div className="w-2 h-2 border-white border-[3px] bg-main absolute ml-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar