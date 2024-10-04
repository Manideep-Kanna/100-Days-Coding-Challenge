import React from "react";
import ProfileCircleComponent from "./ProfileCircleComponent";
import ButtonComponent from "./ButtonComponent";

function UserComponent() {
  return (
    <div className="my-2 mx-14">
      <div className="font-bold my-7">Users</div>
      <div>
        <input type="text" name="" id="" placeholder="Search Users" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex  justify-between items-center">
          <ProfileCircleComponent text="H" />
          <p className="font-semibold">Harkirat Singh</p>
        </div>
        <div>
          <ButtonComponent text="Send Money" onClick={"#"} />
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
