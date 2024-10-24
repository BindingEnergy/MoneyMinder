import React, { useState } from 'react';
import { UserButton } from '@clerk/clerk-react';
import { BackpackIcon, LayoutGrid, ReceiptText, ShieldCheck, Menu, GemIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function DashboardHeader() {

  
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (path) => {
    setActiveMenu(path);
    navigate(path);
    setIsMenuOpen(false); 
  };


  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutGrid,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Income',
      icon: ReceiptText,
      path: '/dashboard/income',
    },
    {
      id: 3,
      name: 'Expenses',
      icon: BackpackIcon,
      path: '/dashboard/expenses',
    },
    {
      id: 4,
      name: 'Subscription',
      icon: GemIcon,
      path: '/dashboard/Subscription',
    },
    // Add other menu items here
  ];

  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center w-full">
      <div className="md:hidden">
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0  bg-white shadow-md z-10 md:hidden rounded-xl w-[85%] mt-6 ml-2">
          <div className="p-5">
            {menuList.map((menu) => (
              <h2
                key={menu.id}
                onClick={() => handleMenuClick(menu.path)}
                className={`flex gap-3 mb-5 items-center text-gray-700 font-medium p-3 cursor-pointer rounded-md hover:text-white hover:bg-black 
                ${activeMenu === menu.path ? 'bg-black text-white' : ''}`}
              >
                <menu.icon className="w-6 h-6" />
                <span>{menu.name}</span>
              </h2>
            ))}
          </div>
        </div>
      )}
      <div className="md:hidden">
        <UserButton/>
      </div>
    </div>
  );
}

export default DashboardHeader;