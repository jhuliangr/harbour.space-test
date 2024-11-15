import { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className={`flex items-center justify-between w-full text-main text-lg p-5 py-6 ml-5 font-medium bg-white  border-gray-300  transition-all border ${isOpen ? 'duration-100 border-b-0 rounded-b-none rounded-t-[50px]' : 'duration-1000 origin-bottom rounded-full '}`}
            >
                Program conditions
                <Arrow isOpen={isOpen} />
            </button>

            <div className={`absolute left-0 z-10 w-full bg-white border-b border-l border-r ml-5 mt-[-20px]  border-gray-200 rounded-b-[3rem]  overflow-hidden transition-all duration-500 ${isOpen ? 'origin-top max-h-screen' : 'max-h-0 origin-bottom'}`}>
                <div className="p-5">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admisions</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Harbour.Space</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SGC</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Living in Bangkok</a>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;

function Arrow({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            className={`w-5 h-5 ml-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5" />
        </svg>
    )
}