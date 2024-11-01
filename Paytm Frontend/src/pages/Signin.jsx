import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import WarningText from '../components/WarningText'

const Signin = () => {
  return (
    <div className='bg-white h-screen flex justify-center'>
      <div className='w-[40%] bg-gray-200 shadow-md rounded-md mt-10 mb-10 flex justify-center items-center'>
        <form className='w-[50%] bg-white rounded-sm p-[6px]' action="">
          <Heading label={"Sign In"} />
          <SubHeading text={"Enter Yor Details"} />
          <InputBox label={"Email"} placeholder={"John@gmail.com"} />
          <InputBox label={"Password"} placeholder={"123456"} />
          <Button btntext={"Sign In"} />
          <WarningText text={"Don't Have an Account?"} btntext={"Sign Up"} to={"/signup"} />

        </form>
      </div>
    </div>
  )
}

export default Signin
