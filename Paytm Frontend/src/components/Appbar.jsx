import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atom'

const Appbar = () => {
  const navigate = useNavigate()
  const user = useRecoilValue(userAtom);
  
  
  return (
    <div className='p-2 flex justify-between items-center w-full shadow bg-white '>
      <div className='font-semibold text-2x '><img className='h-14 w-46 ml-8  object-cover' src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="" /></div>
      <div className=' flex items-center justify-center gap-6 mr-4'>
        <div className='text-xl'>Hello</div>
       {user && <div className='px-3 py-2 text-white/90 text-lg rounded-md bg-green-500 flex items-center justify-center font-semibold '>{user.charAt(0).toUpperCase()+user.slice(1)}</div>}
        <button onClick={(()=>{
          localStorage.removeItem("token")
          navigate("/signin")
        })} className='px-4 py-2 tracking-wide bg-[#00BAF2] rounded-full text-white font-semibold text-lg '>Logout</button>
      </div>
    </div>
  )
}

export default Appbar
