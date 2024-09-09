import React from 'react';
import SideNav from '../../Components/SideNavbar/SideNav';
import DashboardHeader from '../../Components/Header/DashboardHeader';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        <DashboardHeader />
        <div className="p-4">
          {/* Render the nested routes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
