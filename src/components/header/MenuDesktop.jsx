import React from 'react'
import { navItems } from '../../utils/data'
import propTypes from 'prop-types'
const MenuDesktop = ({ scroll }) => {
  return (
    <ul className='flex gap-10 items-center'>
      {navItems.map((item) => (
        <li
          key={`header-menu-item-${item}`}
          className={`text-xs ${scroll ? 'text-green' : 'text-white'}`}>
          <a href='#'>{item}</a>
        </li>
      ))}

      <li className='text-xs text-dark-blue bg-white px-6 py-3 font-serif uppercase rounded-3xl hover:text-white hover:bg-white/[.25]'>
        <a href='#'>Contact</a>
      </li>
    </ul>
  )
}

export default MenuDesktop

MenuDesktop.propTypes = {
  scroll: propTypes.bool,
}
