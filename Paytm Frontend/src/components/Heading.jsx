import React from 'react'

const Heading = ({label}) => {
  return (
    <div className='flex items-center justify-center'>
      <h2 className='text-2xl font-bold'>{label}</h2>
    </div>
  )
}

export default Heading
