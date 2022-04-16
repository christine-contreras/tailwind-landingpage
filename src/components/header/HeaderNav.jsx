import React from 'react'
import propTypes from 'prop-types'
import { useState, useEffect } from 'react'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
const HeaderNav = ({ scroll }) => {
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
  return (
    <nav>
      {isMobile ? (
        <MenuMobile scroll={scroll} />
      ) : (
        <MenuDesktop scroll={scroll} />
      )}
    </nav>
  )
}

export default HeaderNav

HeaderNav.propTypes = {
  scroll: propTypes.bool,
}
