import React from 'react'

export default function submitButton({ label, onClick }) {
  return (
    <button type='submit' onClick={onClick} className='btn btn-success text-white'>
        {label}
    </button>
  )
}
