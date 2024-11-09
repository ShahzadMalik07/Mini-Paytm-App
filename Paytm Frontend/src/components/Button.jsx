import React from 'react'

const Button = ({btntext, onclick}) => {
  return (
    <div className='mt-2'>
      <button onClick={onclick} className='px-2 py-1 bg-[#00BAF2] text-lg text-white w-full rounded-md'>{btntext}</button>
    </div>
  )
}

export default Button
