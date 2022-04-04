import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='flex flex-col items-center space-y-4'>
      <h1></h1>
      <Link className='p-4 bg-red-500 rounded-lg' to="demo">
        Go to list
      </Link>
    </div>
  )
}

export default Home
