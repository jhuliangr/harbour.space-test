import React from 'react'
import Section3Item from './Section3Item'

function Section3() {
    return (
        <section className='mt-48'>
            <img src="/pattern.png" alt="pattern" className='mx-auto absolute z-[-1]' />
            <div className='pt-10 flex gap-10'>
                {[1,2,3].map((item, i) => <Section3Item key={i} />)}
            </div>

        </section>
    )
}

export default Section3