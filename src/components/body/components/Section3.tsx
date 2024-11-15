import 'swiper/swiper-bundle.css';
import Section3Item from './Section3Item';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function Section3() {
    return (
        <div className='flex items-center justify-center flex-col absolute w-screen md:w-[100%] left-0 mt-[30vh] '>
            <div className='absolute mt-[-80vh] left-0 bg-main w-full block md:hidden'>
                <img src="/pattern_responsive.png" alt="pattern_responsive" />
            </div>
            <img src="/pattern.png" alt="pattern" className='md:block hidden absolute mt-[-50vh]' />
            <Swiper
                breakpoints={{
                    1: {
                        spaceBetween: 40,
                        slidesPerView: 1.2,
                    },
                    768: {
                        spaceBetween: 50,
                        slidesPerView: 1.5
                    }, 
                    1024: {
                        spaceBetween: 50,
                        slidesPerView: 2
                    }
                }}
                modules={[Navigation]}
                navigation={false}
                centeredSlides={true}
                centeredSlidesBounds={true}
                initialSlide={Math.floor(6 / 2)}
                pagination={{ clickable: true }}
                className='w-full flex justify-center'
            >
                {[1, 2, 3, 4, 5, 6].map((_item, i) =>
                    <SwiperSlide key={i} className='w-auto flex justify-center'>
                        <Section3Item />
                    </SwiperSlide>
                )}
                <Navigations />
            </Swiper>
        </div>
    )
}

export default Section3

function Navigations() {
    const swiper = useSwiper()

    return (
        <div className="navigation flex gap-2 justify-end mt-4 md:hidden">
            <button className="border p-5 rounded-full" onClick={_e => swiper.slidePrev()}>
                <img src="/left.png" alt="left_arrow" />
            </button>
            <button className="border p-5 rounded-full" onClick={_e => swiper.slideNext()}>
                <img src="/right.png" alt="right_arrow" />
            </button>
        </div>
    )
}