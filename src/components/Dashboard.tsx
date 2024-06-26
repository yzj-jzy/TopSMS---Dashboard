import React from 'react';
import SideBar from "./ui/SideBar";
import TopBar from "./ui/TopBar";
import Body from "./ui/Body";

export function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100" >
      <TopBar />
      <div className="flex flex-1" style={{marginTop:"30px"}}>
        <SideBar  />
        <div className="flex-1 p-6 overflow-auto">
          <Body />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
