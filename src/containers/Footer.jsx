import React from 'react'
import '../components/footer/footer.css'
import FooterGallery from '../components/footer/FooterGallery'
import Logo from '../images/Logo'
import FooterNav from '../components/footer/FooterNav'
import FooterSocial from '../components/footer/FooterSocial'
const Footer = () => {
  return (
    <footer>
      <FooterGallery />

      <section className='bg-light-green p-12 flex flex-col justify-center items-center'>
        <div className='m-auto pb-8'>
          <Logo color='#2c7566' />
        </div>

        <FooterNav />

        <FooterSocial />
      </section>
    </footer>
  )
}

export default Footer
