import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Balance = () => {
  const [balance,setbalance] = useState()
  

 

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
          Authorization: localStorage.getItem("token")
      }
  })
      .then(async(response) => {
      setbalance(response.data.balance)
     

      })

  },[])
  return (
    <div className='p-6'>
      <div className='flex text-xl font-semibold'>Your Balance<div className='ml-2 text-xl font-semibold'>Rs. {balance}</div></div>
    </div>
  )
}

export default Balance
