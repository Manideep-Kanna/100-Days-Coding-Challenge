import React from "react";
import AppBar from "../components/AppBar";
import BalanceComponent from "../components/BalanceComponent";
import UserComponent from "../components/UserComponent";

function Dashboard() {
  return (
    <div className='mx-14 my-10'>
      <AppBar />
      <hr />
      <BalanceComponent />
      <hr />
      <UserComponent />
    </div>
  );
}

export default Dashboard;
