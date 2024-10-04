import React from 'react'

function InputBoxComponent({label,placeholder,onChangeFunction}) {
  return (
    <div>
        <div className='font-semibold my-3'>{label}</div>
        <input type="text" placeholder={placeholder} className='px-3 py-2 bg-white border shadow-sm w-full rounded-md border-slate-200' onChange={(e) => onChangeFunction(e.target.value)}/>
    </div>
  )
}

export default InputBoxComponent