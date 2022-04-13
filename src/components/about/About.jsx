import React from 'react'
import propTypes from 'prop-types'
import Link from '../link/Link'

const About = ({ title, description, color, image, imageRight }) => {
  return (
    <section className='flex flex-wrap flex-col md:flex-row'>
      <div className={`flex-[1_1_50%] ${imageRight && 'md:order-1'}`}>
        <img src={image} alt='egg' className='w-full' />
      </div>
      <div className='p-9 xl:p-28 flex-[1_1_50%] flex justify-center flex-col items-center'>
        <div className='w-full text-center md:text-left'>
          <h2 className='font-serif text-3xl text-dark-blue lg:max-w-[22rem] font-black pb-6'>
            {title}
          </h2>
        </div>

        <p className='text-center md:text-left text-gray pb-6'>{description}</p>

        <div className='w-full text-center md:text-left'>
          <Link color={color} />
        </div>
      </div>
    </section>
  )
}

export default About
About.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  color: propTypes.string,
  image: propTypes.string,
  imageRight: propTypes.bool,
}
