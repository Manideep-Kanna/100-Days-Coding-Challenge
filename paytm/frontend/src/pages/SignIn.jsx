import React, { useState } from 'react'
import InputBoxComponent from '../components/InputBoxComponent'
import ButtonComponent from '../components/ButtonComponent'
import BottomWarningComponent from '../components/BottomWarningComponent'
import HeadingComponent from '../components/HeadingComponent'
import SubHeadingComponent from '../components/SubHeadingComponent'
import axios from 'axios'
import { PAYTM_BACKEND_URL } from '../endpoints'
import { useNavigate } from 'react-router-dom'


function SignIn() {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmitButtonClicked = async() =>{
    try{
    const response = await axios.post(PAYTM_BACKEND_URL+"/user/signIn",{
      userName,
      password
    });
    localStorage.setItem('token',`Bearer ${response.data?.token}`)
    navigate("/dashboard")
  }
  catch(err){
    console.log(err)
  }

  }
  return (
    <div className='w-1/5 mx-auto h-screen flex justify-center flex-col shadow-lg'>
      <div className="flex flex-col justify-center items-center">
        <HeadingComponent text="Sign In" />
        <SubHeadingComponent text="Enter your credentials to access your account" />
      </div>
      <InputBoxComponent label={"Email"} placeholder={"manideep@gmail.com"} onChangeFunction={setUserName}/>
        <InputBoxComponent label="password" placeholder={"kanna"} onChangeFunction={setPassword}/>
        <ButtonComponent text="Sign In" onClick={onSubmitButtonClicked}/>
        <BottomWarningComponent text="Dont have an account" linkName={"Sign Up"} linkUrl={"/signUp"} />
    </div>
  )
}

export default SignIn