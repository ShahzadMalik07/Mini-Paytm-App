import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import WarningText from '../components/WarningText'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { userAtom } from '../atom'

const Signup = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()
  const settext = useSetRecoilState(userAtom)
 

 



  return (
    <div className='bg-white h-screen flex justify-center'>
      <div className='w-[40%] bg-gray-200 shadow-md rounded-md mt-10 mb-10 flex justify-center items-center'>
        <div className='w-[50%] bg-white rounded-sm p-[6px]' action="">
          <Heading label={"Sign Up"} />
          <SubHeading text={"Create Your Account"} />
          <InputBox onchange={(e) => { setfirstname(e.target.value) }} label={"First Name"} placeholder={"John"} />
          <InputBox onchange={(e) => { setlastname(e.target.value) }} label={"Last Name"} placeholder={"Wick"} />
          <InputBox onchange={(e) => { setusername(e.target.value) }} label={"Email"} placeholder={"John@gmail.com"} />
          <InputBox onchange={(e) => { setpassword(e.target.value) }} label={"Password"} placeholder={"123456"} />
          <Button onclick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              firstname,
              lastname,
              username,
              password
            })

          settext("hello")
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")

          }} btntext={"Sign Up"} />

          <WarningText text={"Already Have an Account?"} btntext={"Sign In"} to={"/signin"} />

        </div>
      </div>
    </div>
  )
}

export default Signup
