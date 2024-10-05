import React from 'react'
import ProfileCircleComponent from "./ProfileCircleComponent";
import ButtonComponent from "./ButtonComponent";

function User({name, onSendMoneyClicked}) {
  return (
    <div className="flex justify-between items-center my-4">
    <div className="flex  justify-between items-center">
      <ProfileCircleComponent text={name[0]} />
      <p className="font-bold ml-5">{name}</p>
    </div>
    <div>
      <ButtonComponent text="Send Money" onClick={onSendMoneyClicked} />
    </div>
  </div>
  )
}

export default User