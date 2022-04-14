import transformImage from '../images/desktop/image-transform.jpg'
import standOutImage from '../images/desktop/image-stand-out.jpg'
import graphicDesignImageDesktop from '../images/desktop/image-graphic-design.jpg'
import graphicDesignImageMobile from '../images/mobile/image-graphic-design.jpg'
import photographyImageDesktop from '../images/desktop/image-photography.jpg'
import photographyImageMobile from '../images/mobile/image-photography.jpg'

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
