import React from 'react'
import IconFacebook from '../../images/icons/IconFacebook'
import IconInstagram from '../../images/icons/IconInstagram'
import IconPinterest from '../../images/icons/IconPinterest'
import IconTwitter from '../../images/icons/IconTwitter'

const FooterSocial = () => {
  return (
    <menu className='flex gap-6 pt-10'>
      <li className='text-sm text-green hover:text-white'>
        <a href='#' className='link-social'>
          <IconFacebook />
        </a>
      </li>
      <li className='text-sm text-green hover:text-white'>
        <a href='#' className='link-social'>
          <IconInstagram />
        </a>
      </li>
      <li className='text-sm text-green hover:text-white'>
        <a href='#' className='link-social'>
          <IconTwitter />
        </a>
      </li>
      <li className='text-sm text-green hover:text-white'>
        <a href='#' className='link-social'>
          <IconPinterest />
        </a>
      </li>
    </menu>
  )
}

export default FooterSocial
