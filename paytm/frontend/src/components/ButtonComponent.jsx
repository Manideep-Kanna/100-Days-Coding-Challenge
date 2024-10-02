import React from 'react'

function ButtonComponent({text,onClick}) {
  return (
    <div className='text-white font-sans font-semibold bg-slate-900 px-3 py-2 my-2 flex justify-center rounded-md'>
        {text}
    </div>

  )
}

export default ButtonComponent