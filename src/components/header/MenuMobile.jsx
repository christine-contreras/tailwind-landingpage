import React from 'react'
import { useState } from 'react'
import menuIcon from '../../images/icons/icon-hamburger.svg'
import { navItems } from '../../utils/data'

const MenuMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='relative'>
      <button onClick={() => setToggleMenu((prevToggle) => !prevToggle)}>
        <img src={menuIcon} alt='mobile menu' />
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
