import React from 'react'
import ProfileCircleComponent from './ProfileCircleComponent'

function AppBar() {
  return (
    <div className='flex justify-between my-3'>
        <div className='font-bold text-xl'>PayTM App</div>
        <div className='flex gap-2 justify-between items-center'>
            <p className='font-semibold text-xl'>Hello</p>
            <ProfileCircleComponent text="U" />
        </div>
    </div>
  )
}

export default AppBar