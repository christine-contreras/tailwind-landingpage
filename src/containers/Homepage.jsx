import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Offer from '../components/offers/Offer'
import Testimonials from './Testimonials'
import { aboutSections, offerSections } from '../utils/data'

const Homepage = () => {
  return (
    <>
      <Hero />

      <section>
        {aboutSections.map((section) => (
          <About key={`about-section-${section.title}`} section={section} />
        ))}
      </section>

      <section className='flex flex-wrap flex-col md:flex-row'>
        {offerSections.map((section) => (
          <Offer key={`offer-section-${section.title}`} section={section} />
        ))}
      </section>

      <Testimonials />
    </>
  )
}

export default Homepage
