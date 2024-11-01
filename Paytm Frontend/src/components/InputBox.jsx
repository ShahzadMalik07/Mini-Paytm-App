import React from 'react'

const InputBox = ({label, placeholder, onchange}) => {
  return (
    <div className='flex flex-col'>
    <label className='text-md font-medium mb-[6px]' htmlFor="">{label}</label>
    <input onChange={onchange} className='mb-1 p-[7px] border border-2px-solid rounded-sm' type="text" placeholder={placeholder}  />
    </div>
  )
}

export default InputBox
