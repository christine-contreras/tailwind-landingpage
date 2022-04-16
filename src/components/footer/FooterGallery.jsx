import React from 'react'
import { useState, useEffect } from 'react'
import { galleryImages } from '../../utils/data'

const FooterGallery = () => {
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

  const isMobile = width <= 768

  return (
    // <section className='grid auto-cols-fr grid-row-2 md:grid-cols-4 md:grid-rows-1'>
    <section className='flex flex-wrap'>
      {galleryImages.map((image) => (
        <div
          key={`gallery-image-${image.alt}`}
          className='basis-1/2 md:basis-1/4'>
          <img
            src={isMobile ? image.mobile : image.desktop}
            alt={image.alt}
            className='w-full'
          />
        </div>
      ))}
    </section>
  )
}

export default FooterGallery
