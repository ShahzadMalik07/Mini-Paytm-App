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
import Certify from '../components/Certify'


const Signin = () => {
  const setUser = useSetRecoilState(userAtom);
  const [inputs, setinputs] = useState({username:"", password:""})
  const [focused, setfocused] = useState({username:false, password:false})
  

  const handleFocus = (field) => {
    setfocused((prev) => ({ ...prev, [field]: true }));
  };

  const blurHandle = (field)=>{
    if(!inputs[field]){
      setfocused((prev)=>({...prev, [field]:false}))
    }
 

  }

  const handleChange =(field,value)=>{
    setinputs((prev)=>({...prev,[field]:value}))
  }
  

  const navigate = useNavigate()

  const handleclick = async (e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
      username:inputs.username,
      password:inputs.password
    })
    localStorage.setItem("token", response.data.token)
    navigate("/dashboard")
    setUser(response?.data.user.firstname)

  }

  return (
    <div className='bg-white h-screen flex justify-center'>
      <div className='w-[40%] bg-gray-200 shadow-md rounded-md mt-10 mb-10 flex justify-center items-center'>
        <form className='w-[65%] bg-white rounded-sm p-4 px-[40px]' action="">
          <Heading label={"Sign In"} />
          <SubHeading text={"Enter Yor Details"} />
          <InputBox blur={()=>blurHandle("username")} focused={focused.username} inputs={inputs.username} onfocus={()=>handleFocus("username")}  onchange={(e)=>handleChange("username",e.target.value)} label={"Email"} placeholder={""} value={inputs.username} />
          <InputBox blur={()=>blurHandle("password")} focused={focused.password} inputs={inputs.password} onfocus={()=>handleFocus("password")}  onchange={(e)=>handleChange("password",e.target.value)} label={"Password"} placeholder={""} value={inputs.password} />
          <Certify/>
          <Button onclick={handleclick} btntext={"Sign In"} />
          <WarningText text={"Don't Have an Account?"} btntext={"Sign Up"} to={"/signup"} />

        </form>
      </div>
    </div>
  )
}

export default Signin
