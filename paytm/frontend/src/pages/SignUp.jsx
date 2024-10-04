import React, { useState } from "react";
import HeadingComponent from "../components/HeadingComponent";
import SubHeadingComponent from "../components/SubHeadingComponent";
import InputBoxComponent from "../components/InputBoxComponent";
import ButtonComponent from "../components/ButtonComponent";
import BottomWarningComponent from "../components/BottomWarningComponent";
import { PAYTM_BACKEND_URL } from "../endpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitButtonClicked = async () => {
    const userRegistrationObject = {
      firstName,
      lastName,
      userName,
      password,
    };
  
    try{
      const response = await axios.post(
        PAYTM_BACKEND_URL + "/user/signUp",
        userRegistrationObject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

        localStorage.setItem("token", `Bearer ${response.data?.token}`);
        navigate("/dashboard")

    }
    catch(err){
      console.log(err.response.data)
    }

  };
  return (
    <div className="w-1/5 mx-auto h-screen flex justify-center flex-col shadow-lg">
      <div className="flex flex-col justify-center items-center">
        <HeadingComponent text="Sign up" />
        <SubHeadingComponent text="Enter your information to create an account" />
      </div>
      <InputBoxComponent
        label="First Name"
        placeholder="Vattikuti"
        onChangeFunction={setFirstName}
      />
      <InputBoxComponent
        label="Last Name"
        placeholder="Sitaram"
        onChangeFunction={setLastName}
      />
      <InputBoxComponent
        label="Email"
        placeholder="manideep@gmail.com"
        onChangeFunction={setUserName}
      />
      <InputBoxComponent
        label="Password"
        placeholder="123456"
        onChangeFunction={setPassword}
      />
      <ButtonComponent text="Sign Up" onClick={onSubmitButtonClicked} />
      <BottomWarningComponent
        text="Already have an account"
        linkName="Sign In"
        linkUrl={"/signIn"}
      />
    </div>
  );
}

export default SignUp;
