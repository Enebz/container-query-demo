import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className='navbar'>
        <Link className="navbar-item" to="/">
          <h1>Title</h1>
        </Link>

        <div className="navbar-item">
          Welcome.
        </div>
      </div>
    </div>
  )
}

export default Header
