import React from 'react'

const Heading = ({label}) => {
  return (
    <div className='flex items-center justify-center'>
      <h2 className='text-2xl text-[#00BAF2]  font-bold'>{label}</h2>
    </div>
  )
}

export default Heading
