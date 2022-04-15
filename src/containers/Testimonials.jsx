import React from 'react'
import Testimonial from '../components/testimonial/Testimonial'
import { testimonials } from '../utils/data'
const Testimonials = () => {
  return (
    <article className='pt-10 pb-10 pr-4 pl-4'>
      <header className='text-center m-auto'>
        <h2 className='m-auto text-xl text-light-gray tracking-widest uppercase font-serif'>
          Client Testimonials
        </h2>
      </header>

      <div className='lg:flex lg:flex-row lg:flex-nowrap max-w-7xl m-auto'>
        {testimonials.map((testimonial) => (
          <Testimonial
            testimonial={testimonial}
            key={`testimonial-${testimonial.name}`}
          />
        ))}
      </div>
    </article>
  )
}

export default Testimonials
