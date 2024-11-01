import React from 'react'

const Appbar = () => {
  return (
    <div className='p-4 flex justify-between items-center w-full shadow'>
      <div className='font-semibold text-2xl'>PayTm App</div>
      <div className=' flex items-center justify-center'>
        <div className='mr-4'>Hello</div>
        <div className='h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold '>U</div>
      </div>
    </div>
  )
}

export default Appbar
