import React, { useEffect,useState } from "react";
import User from "./User";
import { PAYTM_BACKEND_URL } from "../endpoints";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function  UserComponent() {
  const [users, setUsers] = useState([]);
  const [filter,setFilter] = useState("");

  const navigate = useNavigate();

  const onSendMoneyButtonClicked = (id,name) =>{
    navigate("/send?id="+ id + "&name="+name)
  }

  useEffect(() =>{
    const fetchData = async() =>{
      const response = await axios.get(PAYTM_BACKEND_URL+"/user/bulk?filter="+filter,{
        headers:{
          'Authorization': localStorage.getItem('token')
        }
      });
      console.log(response)
      if(response.data?.message){
        console.log("Please Sign in again there is some errror in authentication token")
      }
      else{
        setUsers(response.data)
        
      }
    }
    fetchData();
  },[filter])
  return (
    <div className="my-2 ">
      <div className="font-bold my-7 text-lgs">Users</div>
      <div className="text-sm border py-1 px-1 ">
        <input className="w-full" type="text" name="" id="" placeholder="Search Users" onChange={(e) => setFilter(e.target.value)}/>
      </div>
      {
        users.map((user) =>(
          <User name={user.firstName + " " + user.lastName} onSendMoneyClicked ={() => onSendMoneyButtonClicked(user._id,user.name)}  />
        ))
      }
    </div>
  );
}

export default UserComponent;
