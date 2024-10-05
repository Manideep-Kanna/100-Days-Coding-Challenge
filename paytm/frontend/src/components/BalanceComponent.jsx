import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { PAYTM_BACKEND_URL } from '../endpoints';


function BalanceComponent() {
  const [balance,setBalance] = useState();
  useEffect(() =>{
   const fetchData = async () =>{
   const response = await axios.get(PAYTM_BACKEND_URL+"/account/balance",{
    headers:{
      'Authorization': localStorage.getItem("token") 
    }
   })
   ;
   const balance = response.data?.balance;
   if(parseInt(balance)){
    setBalance(parseInt(balance))
    console.log("Set the Balance from this object ",response.data)
   }
   else{
    console.log("Some error with Auth Token")
   }
  }
  fetchData()

  },[])
  return (
    <div className='my-3 flex justify-start gap-5 text-lg'>
        <div className="font-bold">Your Balance</div>
        <div className='font-bold'>Rs {balance}</div>
    </div>
  )
}

export default BalanceComponent