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
import Certify from '../components/Certify'

const Signup = () => {
  const [inputs, setinputs] = useState({firstname:"",lastname:"",username:"", password:""})
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

  const user = useRecoilValue(userAtom);
  console.log(inputs.firstname,inputs.lastname,inputs.username,inputs.password)
 

 



  return (
    <div className='bg-white h-screen flex justify-center'>
      <div className='w-[40%] bg-gray-200 shadow-md rounded-md mt-10 mb-10 flex justify-center items-center'>
        <div className='w-[65%] bg-white rounded-smp-4 px-[40px]' action="">
          <Heading label={"Sign Up"} />
          <SubHeading text={"Create Your Account"} />
          <InputBox blur={()=>blurHandle("firstname")} focused={focused.firstname} inputs={inputs.firstname} onfocus={()=>handleFocus("firstname")}  onchange={(e)=>handleChange("firstname",e.target.value)} label={"First Name"} placeholder={""} />
          <InputBox blur={()=>blurHandle("lastname")} focused={focused.lastname} inputs={inputs.lastname} onfocus={()=>handleFocus("lastname")}  onchange={(e)=>handleChange("lastname",e.target.value)} label={"Last Name"} placeholder={""} />
          <InputBox blur={()=>blurHandle("username")} focused={focused.username} inputs={inputs.username} onfocus={()=>handleFocus("username")}  onchange={(e)=>handleChange("username",e.target.value)} label={"Email"} placeholder={""} />
          <InputBox blur={()=>blurHandle("password")} focused={focused.password} inputs={inputs.password} onfocus={()=>handleFocus("password")}  onchange={(e)=>handleChange("password",e.target.value)} label={"Password"} placeholder={""} />
         <Certify/>
          <Button onclick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              firstname:inputs.firstname,
              lastname:inputs.lastname,
              username:inputs.username,
              password:inputs.password
            })

        
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
