import React from 'react'

const InputBox = ({label, placeholder, onchange}) => {
  return (
    <div className='flex flex-col'>
    <label className='text-md font-medium mb-[6px]' htmlFor="">{label}</label>
    <input onChange={onchange} className='mb-2 caret-[#00BAF2]  p-[7px] outline-none border-b-2 border-b-[#00BAF2] rounded-sm' type="text" placeholder={placeholder}  />
    </div>
  )
}

export default InputBox
