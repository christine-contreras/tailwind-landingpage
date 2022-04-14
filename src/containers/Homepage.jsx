import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Offer from '../components/offers/Offer'
import transformImage from '../images/desktop/image-transform.jpg'
import standOutImage from '../images/desktop/image-stand-out.jpg'
import graphicDesignImageDesktop from '../images/desktop/image-graphic-design.jpg'
import graphicDesignImageMobile from '../images/mobile/image-graphic-design.jpg'
import photographyImageDesktop from '../images/desktop/image-photography.jpg'
import photographyImageMobile from '../images/mobile/image-photography.jpg'

const Homepage = () => {
  return (
    <>
      <Hero />

      <section>
        <About
          title='Transform your brand'
          description='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
          color='yellow'
          image={transformImage}
          imageRight={true}
        />

        <About
          title='Stand out to the right audience'
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          color='pink'
          image={standOutImage}
          imageRight={false}
        />
      </section>

      <section className='flex flex-wrap flex-col md:flex-row'>
        <Offer
          imageMobile={graphicDesignImageMobile}
          imageDesktop={graphicDesignImageDesktop}
          title='Graphic Design'
          description="Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients' attention."
          color='dark-green'
        />
        <Offer
          imageMobile={photographyImageMobile}
          imageDesktop={photographyImageDesktop}
          title='Photography'
          description='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          color='blue'
        />
      </section>
    </>
  )
}

export default Homepage
