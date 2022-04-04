import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='homepage'>
      <Link className='list-button' to="demo">
        Go to list
      </Link>
    </div>
  )
}

export default Home
