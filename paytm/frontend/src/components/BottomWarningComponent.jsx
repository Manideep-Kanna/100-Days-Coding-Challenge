import React from 'react'

function BottomWarningComponent({text,linkName,linkUrl}) {
  return (
    <div className="flex justify-center font-semibold">
        {text}? <a href={linkUrl} className='underline mx-2'>{linkName}</a>
    </div>
  )
}

export default BottomWarningComponent