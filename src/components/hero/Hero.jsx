import React from 'react'
import './hero.css'
import arrow from '../../images/icons/icon-arrow-down.svg'
const Hero = () => {
  return (
    <section className='hero h-[90vh] max-h-[750px] flex justify-center items-center flex-col gap-y-20'>
      <h1 className='font-serif text-4xl sm:text-5xl tracking-widest uppercase text-white text-center'>
        We Are Creatives
      </h1>
      <img src={arrow} alt='view more about us' className='lg:pb-20' />
    </section>
  )
}

export default Hero
