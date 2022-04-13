import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.element,
}
