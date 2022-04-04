import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative flex items-center w-full min-h-header bg-primary-400 header-shadow px-4 z-40">
      <div className='grid grid-cols-2 items-center w-full max-w-content mx-auto'>
        <Link className="mx-auto w-min" to="/">
          <h1 className='hidden cq-w-md:block'>Title</h1>
          <h1 className='block cq-w-md:hidden'>T</h1>
        </Link>

        <div className="mx-auto w-min">
          Welcome.
        </div>
      </div>
    </div>
  )
}

export default Header
