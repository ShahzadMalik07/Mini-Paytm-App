import React from 'react'

const InputBox = ({label, placeholder, onchange, value, onfocus, focused, inputs, blur}) => {

  return (
    <div className='relative mb-3 '>
    <input value={value} onBlur={blur} onChange={onchange} onFocus={onfocus}  className={`w-full bg-transparent mb-2 caret-[#00BAF2]  p-[7px] outline-none border-b-2 border-b-[#00BAF2] rounded-sm`} type="text" placeholder={placeholder}  />
    <label className={`absolute left-1 top-1/2 transform -translate-y-1/2 transition-all ${focused || inputs ? "text-sky-500 text-sm -translate-y-9":"text-gray-400"}`} htmlFor="">{label}</label>
    </div>
  )
}

export default InputBox
