import React, { useState } from 'react'
import HeadingComponent from '../components/HeadingComponent'
import ProfileCircleComponent from '../components/ProfileCircleComponent'
import InputBoxComponent from '../components/InputBoxComponent'
import ButtonComponent from '../components/ButtonComponent'
import {useSearchParams,useNavigate} from 'react-router-dom'
import { PAYTM_BACKEND_URL } from '../endpoints'
import axios from 'axios'

function SendMoney() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [amount, setAmount] = useState();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const name = searchParams.get("name")

  const onButtonClick = async() =>{
   const response = await axios.post(PAYTM_BACKEND_URL+"/account/transfer",{
      to: id,
      amount: parseInt(amount)
    },{
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    });

    if(response.data.message){
      console.log(response.data.message)
      // navigate('/dashboard')
    }
    else{
      console.log("Some error occured")
    }
  }

  return (
   <div className='mx-auto w-1/3 shadow-lg'>
    <div className='flex justify-center mt-10 mb-24'>
    <HeadingComponent text={"Send Money"} />
    </div>
    <div className='flex justify-start items-center gap-2'>
      <ProfileCircleComponent text={name[0].toUpperCase()} />
      <div className='font-bold text-xl ml-2 mb-4'>{name[0].toUpperCase() + name.slice(1)}</div>
    </div>
    <InputBoxComponent className='my-4' label={'Amount (in Rs)'} placeholder={"Enter amount"} onChangeFunction={setAmount}/>
    <ButtonComponent text={"Initiate Transfer"} onClick={onButtonClick} />
   </div>
  )
}

export default SendMoney