import { useState } from "react";
import { useDataContext } from "../../../context/DataContext";
import Dropdown from "./Dropdown"

function Section4() {
    const { data } = useDataContext();
    const apiData = data?.scholarship?.faqs?.items;
    return (
        <section className="mt-[120vh] h-screen">
            <div className="flex justify-between flex-wrap mb-10">
                <div>
                    <p className="text-main text-5xl w-[70%] text-left font-medium my-5">
                        Frequently asked questions
                    </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                    <p className="text-[#6A6A6A] text-left md:text-right mx-5 my-5">
                        Filter by:
                    </p>
                    <Dropdown />
                </div>
            </div>
            <div>
                {
                    apiData?.map((item: Item, i: number) =>
                        <Faq key={i} item={item} />
                    )
                }

            </div>
        </section>
    )
}

export default Section4

type Item = {
    type: string;
    question: string;
    answer:
    {
        type: string;
        data: string;
    }[]
}

function Faq({ item }: { item: Item }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="border-t-[1px] border-b-[1px] grid md:grid-cols-2 grid-cols-1 text-left p-10 w-full ">
            <p className="text-main text-xl px-5 font-medium hidden md:block">
                {item.type}
            </p>
            <div className={`font-medium text-xl flex justify-between w-full`}>
                <div className="pr-10">
                    <p className="mb-3">
                        {item.question}
                    </p>
                    <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                        {item.answer.map((answer, index) => (
                            <p className="font-light text-xl my-5" key={index}>
                                {answer.data}
                            </p>
                        ))}
                    </div>
                </div>
                <div >
                    <Button setIsOpen={setIsOpen} isOpen={isOpen} />
                </div>
            </div>
        </div>
    )
}

function Button({ setIsOpen, isOpen }: { setIsOpen: any, isOpen: boolean }) {
    return (
        <button
            className={`relative overflow-hidden rounded-full border-2 w-14 h-14 flex items-center justify-center text-3xl duration-300 ${isOpen ? "text-white" : "text-slate-300"}`}
            onClick={() => setIsOpen((prev: boolean) => !prev)}
        >
            <span
                className={`inline-block transition-transform duration-300 ${isOpen ? "rotate-0" : "rotate-180"}`}
            >
                {isOpen ? <img src="/dash.png" alt="dash" /> : '+'}
            </span>

            <span
                className={`absolute inset-0 rounded-full bg-main transition-transform duration-500 ${isOpen ? "scale-100" : "scale-0"}`}
                style={{
                    zIndex: -1,
                    transitionTimingFunction: "cubic-bezier(1, 1.5, 0.5, 1)",
                }}
            ></span>
        </button>
    )
}