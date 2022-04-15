import transformImage from '../images/desktop/image-transform.jpg'
import standOutImage from '../images/desktop/image-stand-out.jpg'

import graphicDesignImageDesktop from '../images/desktop/image-graphic-design.jpg'
import graphicDesignImageMobile from '../images/mobile/image-graphic-design.jpg'
import photographyImageDesktop from '../images/desktop/image-photography.jpg'
import photographyImageMobile from '../images/mobile/image-photography.jpg'

import emilyImage from '../images/testimonals/image-emily.jpg'
import jennieImage from '../images/testimonals/image-jennie.jpg'
import thomasImage from '../images/testimonals/image-thomas.jpg'

import gallery1Desktop from '../images/desktop/image-gallery-milkbottles.jpg'
import gallery2Desktop from '../images/desktop/image-gallery-orange.jpg'
import gallery3Desktop from '../images/desktop/image-gallery-cone.jpg'
import gallery4Desktop from '../images/desktop/image-gallery-sugarcubes.jpg'
import gallery1Mobile from '../images/mobile/image-gallery-milkbottles.jpg'
import gallery2Mobile from '../images/mobile/image-gallery-orange.jpg'
import gallery3Mobile from '../images/mobile/image-gallery-cone.jpg'
import gallery4Mobile from '../images/mobile/image-gallery-sugarcubes.jpg'

export const aboutSections = [
  {
    title: 'Transform your brand',
    description:
      'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    color: 'yellow',
    image: transformImage,
    imageRight: true,
  },
  {
    title: 'Stand out to the right audience',
    description:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    color: 'pink',
    image: standOutImage,
    imageRight: false,
  },
]

export const offerSections = [
  {
    title: 'Graphic Design',
    description:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
    color: 'dark-green',
    imageMobile: graphicDesignImageMobile,
    imageDesktop: graphicDesignImageDesktop,
  },
  {
    title: 'Photography',
    description:
      'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    color: 'blue',
    imageMobile: photographyImageMobile,
    imageDesktop: photographyImageDesktop,
  },
]

export const testimonials = [
  {
    quote:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    jobTitle: 'Marketing Director',
    image: emilyImage,
  },
  {
    quote:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: 'Thomas S.',
    jobTitle: 'Chief Operating Officer',
    image: thomasImage,
  },
  {
    quote:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    jobTitle: 'Business Owner',
    image: jennieImage,
  },
]

export const galleryImages = [
  {
    alt: 'milk',
    desktop: gallery1Desktop,
    mobile: gallery1Mobile,
  },
  {
    alt: 'orange',
    desktop: gallery2Desktop,
    mobile: gallery2Mobile,
  },
  {
    alt: 'cone',
    desktop: gallery3Desktop,
    mobile: gallery3Mobile,
  },
  {
    alt: 'sugar',
    desktop: gallery4Desktop,
    mobile: gallery4Mobile,
  },
]
