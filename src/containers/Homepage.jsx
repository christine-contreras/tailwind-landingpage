import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import eggImage from '../images/desktop/image-transform.jpg'
import cupImage from '../images/desktop/image-stand-out.jpg'
const Homepage = () => {
  return (
    <>
      <Hero />

      <section>
        <About
          title='Transform your brand'
          description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
          color='yellow'
          image={eggImage}
          imageRight={true}
        />

        <About
          title='Stand out to the right audience'
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          color='pink'
          image={cupImage}
          imageRight={false}
        />
      </section>
    </>
  )
}

export default Homepage
