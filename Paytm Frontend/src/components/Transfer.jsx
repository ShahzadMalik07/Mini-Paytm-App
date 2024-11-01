import axios from 'axios'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


const Transfer = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const name = searchParams.get("name")

  const [amount, setamount] = useState(0)
 

  return (
    <div className='bg-white h-screen flex justify-center'>
      <div className='w-[40%] bg-gray-200 shadow-md rounded-md mt-10 mb-10 flex justify-center items-center'>
        <div className='bg-white w-[45%] px-2 '>
          <div className='text-center font-bold text-2xl mb-12 mt-4'>Send Money</div>
          <div className='flex items-center px-3 mt-4'>
            <div className='flex items-center justify-center mr-3 w-10 h-10 rounded-full bg-green-500 text-md font-semibold text-white'>{name[0].toUpperCase()}</div>
            <div className='font-semibold text-xl'>{name}</div>
          </div>
          <div className='flex flex-col px-3'>
            <p className='text-sm text-gray-600 mb-2 mt-2 font-semibold'>Amount in Rs.</p>
            <input onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (!isNaN(value)) {
                setamount(value);
              } else {
                setamount(0); 
              }
            }} className='px-2 py-1 border border-2px-solid' type="number" />
            <button onClick={() => {
              axios.post("http://localhost:3000/api/v1/account/transfer",
                 {
                  to: id,
                  amount
              }, {
                headers: {
                  Authorization: localStorage.getItem("token")
                }
              })

            }} className='mt-3 mb-3 px-2 py-1 bg-green-500 text-white rounded-md'>Transfer Money</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Transfer
