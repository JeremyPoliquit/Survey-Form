import React from 'react'

export default function defaultButton({ type, command }) {
  return (
    <button className='btn btn-primary text-white'>
        {type}
    </button>
  )
}
