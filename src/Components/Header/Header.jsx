import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink to='/'> Home </NavLink>
      <NavLink to='/products'> Products </NavLink>
      <NavLink to='/contact'> Contact </NavLink>
    </header>
  )
}

export default Header
