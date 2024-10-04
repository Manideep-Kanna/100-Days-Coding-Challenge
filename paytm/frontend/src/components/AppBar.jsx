import React from 'react'
import ProfileCircleComponent from './ProfileCircleComponent'

function AppBar() {
  return (
    <div className='flex justify-between mx-5'>
        <div className='font-semibold'>PayTM App</div>
        <div className='flex gap-2 justify-between items-center'>
            <p className='font-semibold'>Hello</p>
            <ProfileCircleComponent text="U" />
        </div>
    </div>
  )
}

export default AppBar