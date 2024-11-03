import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import WarningText from '../components/WarningText'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../atom'


const Signin = () => {
  const setUser = useSetRecoilState(userAtom);
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  

  const navigate = useNavigate()

  const handleclick = async (e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
      username:username,
      password:password
    })
    localStorage.setItem("token", response.data.token)
    navigate("/dashboard")
    setUser(response?.data.user.firstname)

  }

  return (
    <div className='bg-white h-screen flex justify-center'>
      <div className='w-[40%] bg-gray-200 shadow-md rounded-md mt-10 mb-10 flex justify-center items-center'>
        <form className='w-[50%] bg-white rounded-sm p-[6px]' action="">
          <Heading label={"Sign In"} />
          <SubHeading text={"Enter Yor Details"} />
          <InputBox onchange={((e) => { setusername(e.target.value) })} label={"Email"} placeholder={"John@gmail.com"} />
          <InputBox onchange={((e) => { setpassword(e.target.value) })} label={"Password"} placeholder={"123456"} />
          <Button onclick={handleclick} btntext={"Sign In"} />
          <WarningText text={"Don't Have an Account?"} btntext={"Sign Up"} to={"/signup"} />

        </form>
      </div>
    </div>
  )
}

export default Signin
