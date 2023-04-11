import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <NavLink to='/' className={(navData)=>navData.isActive ? 'active':'inactive'}><p>Home</p></NavLink>
      <NavLink to='/students' className={(navData)=>navData.isActive ? 'active':'inactive'}><p>Students</p></NavLink>
      <NavLink to='/contact' className={(navData)=>navData.isActive ? 'active':'inactive'}><p>Contact Us</p></NavLink>
    </div>
  )
}

export default Navbar