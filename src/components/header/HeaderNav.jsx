import React from 'react'
import { useState, useEffect } from 'react'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
const HeaderNav = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 640
  return <nav>{isMobile ? <MenuMobile /> : <MenuDesktop />}</nav>
}

export default HeaderNav
