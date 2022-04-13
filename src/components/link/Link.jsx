import React from 'react'
import './link.css'
import propTypes from 'prop-types'
const Link = ({ color }) => {
  return (
    <a
      href='#'
      className={`inline-block font-serif uppercase text-sm link relative ${color}`}>
      Learn More
    </a>
  )
}

export default Link

Link.propTypes = {
  color: propTypes.string,
}
