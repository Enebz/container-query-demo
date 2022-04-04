import React from 'react'
import { Link } from "react-router-dom";

function Demo() {
  return (
    <div className='list-items-grid list-items-grid-cols'>
      {[...Array(9).keys()].map(i => {
        return (
          <Link key={i} to={''} className='list-item-style'>
            <h1>Item {i + 1}</h1>
          </Link>
        )
      })
      }
    </div>
  )
}

export default Demo
