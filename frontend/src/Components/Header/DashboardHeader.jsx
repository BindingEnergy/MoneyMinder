import React, { useState } from 'react';
import { UserButton } from '@clerk/clerk-react';
import { BackpackIcon, LayoutGrid, ReceiptText, ShieldCheck, Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function DashboardHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (path) => {
    setActiveMenu(path);
    navigate(path);
    setIsMenuOpen(false); // Close the menu after clicking
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
      name: 'Budgets',
      icon: ShieldCheck,
      path: '/dashboard/budgets',
    },
    // Add other menu items here
  ];

  return (
    <div className="p-5 shadow-sm border-b flex justify-between items-center w-full">
      <div className="md:hidden">
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
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
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="searchBox rounded-lg shadow-md hover:border-black hover:border-2 md:w-1/3">
          <input
            type="text"
            placeholder="Search Transactions"
            className="p-2 rounded-lg border-2 border-black w-full"
          />
        </div>
      </div>
      <div className="hidden md:flex items-center ml-5">
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;