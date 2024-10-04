import React from 'react'

function ButtonComponent({text,onClick}) {
  return (
    <button className='w-full text-white font-sans font-semibold bg-slate-900 px-3 py-2 mt-4 mb-2 flex justify-center rounded-md hover:bg-slate-700' onClick={onClick}>
        {text}
    </button>

  )
}

export default ButtonComponent