import React from 'react'
import { useState, useEffect } from 'react'
import propTypes from 'prop-types'

const Offer = ({ imageMobile, imageDesktop, title, description, color }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 1024

  return (
    <section className='flex-[1_1_50%] grid grid-cols-2 grid-rows-3 xl:grid-cols-5 xl:grid-rows-5'>
      <img
        src={isMobile ? imageMobile : imageDesktop}
        alt=''
        className='w-full col-span-full row-span-full'
      />

      <div className='text-center col-span-full row-start-3 row-span-2 xl:col-start-2 xl:col-span-3 xl:row-start-4 xl:row-span-2'>
        <h2
          className={`font-serif text-3xl text-${color} xl:max-w-[22rem] font-black m-auto`}>
          {title}
        </h2>
        <p className={`text-${color} pt-6 pl-2 pr-2`}>{description}</p>
      </div>
    </section>
  )
}

export default Offer

Offer.propTypes = {
  imageMobile: propTypes.string,
  imageDesktop: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  color: propTypes.string,
}
