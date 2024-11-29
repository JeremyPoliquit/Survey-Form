import React from 'react'

export default function defaultButton({ type, onClick}) {
  return (
    <button onClick={onClick} className='btn btn-primary text-white'>
        {type}
    </button>
  )
}
