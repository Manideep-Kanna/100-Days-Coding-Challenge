import React from 'react'
import HeadingComponent from '../components/HeadingComponent'
import ProfileCircleComponent from '../components/ProfileCircleComponent'
import InputBoxComponent from '../components/InputBoxComponent'
import ButtonComponent from '../components/ButtonComponent'

function SendMoney() {
  return (
   <div className='mx-auto w-1/3 shadow-lg'>
    <div className='flex justify-center mt-10 mb-24'>
    <HeadingComponent text={"Send Money"} />
    </div>
    <div className='flex justify-start items-center gap-2'>
      <ProfileCircleComponent text={"A"} />
      <div className='font-bold text-xl'>Friend's Name</div>
    </div>
    <InputBoxComponent label={'Amount (in Rs)'} placeholder={"Enter amount"}/>
    <ButtonComponent text={"Initiate Transfer"} onClick={"#"} />
   </div>
  )
}

export default SendMoney