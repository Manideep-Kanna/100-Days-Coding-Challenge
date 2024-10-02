import React from 'react'
import InputBoxComponent from '../components/InputBoxComponent'
import ButtonComponent from '../components/ButtonComponent'
import BottomWarningComponent from '../components/BottomWarningComponent'
import HeadingComponent from '../components/HeadingComponent'
import SubHeadingComponent from '../components/SubHeadingComponent'

function SignIn() {
  return (
    <div className='w-1/5 mx-auto h-screen flex justify-center flex-col shadow-lg'>
      <div className="flex flex-col justify-center items-center">
        <HeadingComponent text="Sign In" />
        <SubHeadingComponent text="Enter your credentials to access your account" />
      </div>
      <InputBoxComponent label={"Email"} placeholder={"manideep@gmail.com"} />
        <InputBoxComponent label="password" />
        <ButtonComponent text="Sign In" onClick={"#"}/>
        <BottomWarningComponent text="Dont have an account" linkName={"Sign Up"} linkUrl={"#"} />
    </div>
  )
}

export default SignIn