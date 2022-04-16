import React from 'react'
import '../components/header/header.css'
import Logo from '../images/Logo'
import HeaderNav from '../components/header/HeaderNav'
const Header = () => {
  return (
    <header className='fixed p-8 flex justify-between	w-full items-center'>
      <div>
        <h1 className='sr-only'>Sunnyside</h1>
        <Logo color='#fff' />
      </div>

      <HeaderNav />
    </header>
  )
}

export default Header
