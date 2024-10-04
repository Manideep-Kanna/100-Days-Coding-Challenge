import React from 'react'
import { Link } from 'react-router-dom'

function BottomWarningComponent({text,linkName,linkUrl}) {
  return (
    <div className="flex justify-center font-semibold">
        {text}? <Link to={linkUrl} className='underline mx-2'>{linkName}</Link>
    </div>
  )
}

export default BottomWarningComponent