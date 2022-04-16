import React from 'react'
import { useState, useEffect } from 'react'

import '../components/header/header.css'
import Logo from '../images/Logo'
import HeaderNav from '../components/header/HeaderNav'
const Header = () => {
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)

    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <header
      className={`fixed z-10 p-6 sm:p-8 flex justify-between	w-full items-center ${
        scroll && 'bg-light-green'
      }`}>
      <div>
        <h1 className='sr-only'>Sunnyside</h1>
        <Logo color={scroll ? '#2c7566' : '#fff'} />
      </div>

      <HeaderNav scroll={scroll} />
    </header>
  )
}

export default Header
