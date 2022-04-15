import React from 'react'
import propTypes from 'prop-types'
const Testimonial = ({ testimonial }) => {
  const { quote, name, jobTitle, image } = testimonial

  return (
    <figure className='text-center pt-12 pb-6 max-w-xs m-auto'>
      <img src={image} alt='' className='m-auto rounded-full w-16' />
      <blockquote className='text-dark-gray p-4 pb-10'>{quote}</blockquote>
      <figcaption>
        <cite>
          <span className='block font-serif text-dark-blue not-italic'>
            {name}
          </span>{' '}
          <span className='not-italic text-xs text-light-gray'>{jobTitle}</span>
        </cite>
      </figcaption>
    </figure>
  )
}

export default Testimonial

Testimonial.propTypes = {
  testimonial: propTypes.object,
}
