import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='flex flex-col items-center space-y-8'>
      <h1>Page not found!</h1>
      <Link to="/">
        Take me home
      </Link>
    </div>
  )
}

export default NotFound
