import React from 'react'

export default function cardEssay({ Item, description, handleChange }) {
  return (
    <div className='flex flex-col gap-4 shadow-xl px-7 py-7 rounded-xl bg-slate-800 text-white'>
      <div className="text-lg">{Item}</div>

      <textarea className="bg-slate-900 px-2 py-2 resize-none w-full" onChange={handleChange} rows="5" placeholder={description} />
    </div>
  )
}
