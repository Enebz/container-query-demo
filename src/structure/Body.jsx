import React from 'react'

function Body(props) {
  return (
    <div className='body-outer'>
      <div className='body-inner'>
        {props.children}
      </div>
    </div>
  )
}

export default Body
