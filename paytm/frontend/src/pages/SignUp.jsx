import React from "react";
import HeadingComponent from "../components/HeadingComponent";
import SubHeadingComponent from "../components/SubHeadingComponent";
import InputBoxComponent from "../components/InputBoxComponent";
import ButtonComponent from "../components/ButtonComponent";
import BottomWarningComponent from "../components/BottomWarningComponent";
function SignUp() {
  return (
    <div className="w-1/5 mx-auto h-screen flex justify-center flex-col shadow-lg">
      <div className="flex flex-col justify-center items-center">
        <HeadingComponent text="Sign up" />
        <SubHeadingComponent text="Enter your information to create an account" />
      </div>
      <InputBoxComponent label="First Name" placeholder="Vattikuti" />
      <InputBoxComponent label="Last Name" placeholder="Sitaram" />
      <InputBoxComponent label="Email" placeholder="manideep@gmail.com" />
      <InputBoxComponent label="Password" placeholder="123456" />
      <ButtonComponent text="Sign Up" />
      <BottomWarningComponent
        text="Already have an account"
        linkName="Sign In"
        linkUrl={"#"}
      />
    </div>
  );
}

export default SignUp;
