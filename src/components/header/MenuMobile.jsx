import React from 'react'
import propTypes from 'prop-types'
import { useState } from 'react'
import IconHamburger from '../../images/icons/IconHamburger'
import { navItems } from '../../utils/data'

const MenuMobile = ({ scroll }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='relative'>
      <button onClick={() => setToggleMenu((prevToggle) => !prevToggle)}>
        <span className='sr-only'>Toggle Mobile Menu</span>
        <IconHamburger color={scroll ? '#2c7566' : '#fff'} />
      </button>

      {toggleMenu ? (
        <ul className='flex flex-col absolute gap-6 bg-white p-8 right-0 top-16 w-[90vw] max-w-[300px] items-center menu-mobile'>
          {navItems.map((item) => (
            <li key={`header-menu-item-${item}`} className='text-sm text-gray'>
              <a href='#'>{item}</a>
            </li>
          ))}

          <li className='text-xs text-dark-blue bg-yellow px-6 py-3 font-serif uppercase rounded-3xl hover:bg-yellow/[.25]'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      ) : null}
    </div>
  )
}

export default MenuMobile

MenuMobile.propTypes = {
  scroll: propTypes.bool,
}
