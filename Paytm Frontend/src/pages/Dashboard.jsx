import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../atom'

const Dashboard = () => {
  const value = useRecoilValue(userAtom)
  
  return (
    <div className='bg-[#E0F5FD] h-screen' >
      <Appbar/>
      <Balance/>
      <Users/>
    </div>
  )
}

export default Dashboard
