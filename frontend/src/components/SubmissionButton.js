import React from 'react'
import '../styles/button.css'

const SubmissionButton = ( { placeholder, className} ) => {
  return (
    <button
        type='submit'
        className={className}
        >
        {placeholder}
    </button>
  )
}

export default SubmissionButton