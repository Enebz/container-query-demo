import React from 'react'

function Body(props) {
  return (
    <div className='flex-1 w-full px-4 py-8'>
      <div className='h-full max-w-content mx-auto'>
        {props.children}
      </div>
    </div>
  )
}

export default Body
