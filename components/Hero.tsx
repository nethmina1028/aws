import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div>
    <section id="home" className='pb-20 pt-36 '>
             <div>
                <Spotlight  className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='pink'/>
                <Spotlight  className='top-10 h-[80vh] w-[50vh]  left-full'  fill='pink'/>
             </div>
    </section>

    </div>
  )
}

export default Hero