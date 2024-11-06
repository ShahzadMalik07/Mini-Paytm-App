import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'


const Transfer = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get("id")
  const name = searchParams.get("name")

  const [amount, setamount] = useState(0)
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()

  const [success, setSuccess] = useState(false);


  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <div className='bg-white h-screen flex justify-center'>
      {success && <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          textAlign: "center",
          fontSize: "18px",
          position: "fixed",
          top: "20px",
          width: "100%",
          zIndex: "1000",
        }}
      >
        Payment Successful! Redirecting to your dashboard...
      </div>}
      <div className='w-[40%] bg-gray-200 shadow-md rounded-md mt-10 mb-10 flex justify-center items-center'>
        <div className='bg-white w-[45%] px-2 '>
          <div className='text-center font-bold text-2xl mb-12 mt-4'>Send Money</div>
          <div className='flex items-center px-3 mt-4'>
            <div className='flex items-center justify-center mr-3 w-10 h-10 rounded-full bg-green-500 text-md font-semibold text-white'>{name[0].toUpperCase()}</div>
            <div className='font-semibold tracking-wide text-xl'>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
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
            <button onClick={async () => {
              setloading(true)
              await axios.post("http://localhost:3000/api/v1/account/transfer",
                {
                  to: id,
                  amount
                }, {
                headers: {
                  Authorization: localStorage.getItem("token")
                }
              })
              setSuccess(true)
              setloading(false)


            }} className='mt-3 mb-3 px-2 py-1 bg-green-500 text-white rounded-md' disabled={loading}>{loading ? "Transferring..." : "Transfer Money"}</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Transfer
