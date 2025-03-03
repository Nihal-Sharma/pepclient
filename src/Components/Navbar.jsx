import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav' >
      <div className='left-name'> <text>MedPortal</text></div>
      <Link to={"/add"} className='link-add add-but'> + Add Hospital</Link>
      
    </div>
  )
}

export default Navbar
