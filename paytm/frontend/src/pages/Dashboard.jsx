import React from "react";
import AppBar from "../components/AppBar";
import BalanceComponent from "../components/BalanceComponent";
import UserComponent from "../components/UserComponent";

function Dashboard() {
  return (
    <div>
      <AppBar />
      <BalanceComponent />
      <UserComponent />
    </div>
  );
}

export default Dashboard;
