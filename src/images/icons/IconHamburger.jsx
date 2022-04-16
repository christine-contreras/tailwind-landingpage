import React from 'react'
import propTypes from 'prop-types'

const IconHamburger = ({ color }) => {
  return (
    <svg width='24' height='18' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z'
        fillRule='evenodd'
        fill={color}
      />
    </svg>
  )
}

export default IconHamburger

IconHamburger.propTypes = {
  color: propTypes.string,
}
