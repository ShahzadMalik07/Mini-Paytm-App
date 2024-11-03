import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atom'

const Appbar = () => {
  const navigate = useNavigate()
  const user = useRecoilValue(userAtom);
  
  
  return (
    <div className='p-4 flex justify-between items-center w-full shadow'>
      <div className='font-semibold text-2xl'>PayTm App</div>
      <div className=' flex items-center justify-center gap-6'>
        <div className='text-xl'>Hello</div>
        <div className='px-3 py-2 text-white/90 text-lg rounded-md bg-green-500 flex items-center justify-center font-semibold '>{user.charAt(0).toUpperCase()+user.slice(1)}</div>
        <button onClick={(()=>{
          localStorage.removeItem("token")
          navigate("/signin")
        })} className='px-3 py-2 tracking-wide bg-blue-500 rounded-md text-white text-lg '>Logout</button>
      </div>
    </div>
  )
}

export default Appbar
