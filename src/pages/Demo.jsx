import React from 'react'
import { Link } from "react-router-dom";

function Demo() {
  return (
    <div className='grid gap-2 grid-cols-3 cq-w-sm:grid-cols-4 cq-w-md:grid-cols-5 cq-w-lg:grid-cols-6 cq-w-xl:grid-cols-7'>
      {[...Array(9).keys()].map(i => {
        return (
          <Link key={i} to={''} className='flex flex-col justify-end items-center w-full h-44 p-2 bg-primary-400 rounded-md'>
            <h1>Item {i + 1}</h1>
          </Link>
        )
      })
      }
    </div>
  )
}

export default Demo
