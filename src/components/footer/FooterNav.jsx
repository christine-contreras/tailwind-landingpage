import React from 'react'
import { navItems } from '../../utils/data'

const FooterNav = () => {
  return (
    <menu className='flex gap-14 pb-8'>
      {navItems.map((item) => (
        <li
          key={`footer-menu-item-${item}`}
          className='text-sm text-green hover:text-white'>
          <a href='#'>{item}</a>
        </li>
      ))}
    </menu>
  )
}

export default FooterNav
