import React, { useState } from 'react';
import { BackpackIcon, LayoutGrid, ReceiptText, ShieldCheck, GemIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import logo from './money.png';

function SideNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeMenu, setActiveMenu] = useState(location.pathname);

    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard',
        },
        {
            id: 2,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses',
        },
        {
            id: 3,
            name: 'Income',
            icon: ShieldCheck,
            path: '/dashboard/income',
        },
        {
            id: 4,
            name: 'Subscription',
            icon: GemIcon,
            path: '/dashboard/subscription',
        },
    ];

    const handleMenuClick = (path) => {
        setActiveMenu(path); 
        navigate(path); 
    };

    return (
        <div className='h-screen p-5 border shadow-sm flex flex-col outline-none'>
            <img src={logo} alt="logo" className='h-40 w-50 border-collapse rounded-lg transition-transform duration-500 hover:scale-110 ml-5' />
            <div className='mt-5'>
                {menuList.map((menu) => (
                    <h2
                        key={menu.id}
                        onClick={() => handleMenuClick(menu.path)}
                        className={`flex gap-3 mb-5 items-center text-gray-500 font-medium space p-5 cursor-pointer rounded-md hover:text-white hover:bg-black 
                        ${activeMenu === menu.path ? 'bg-black text-white' : ''}`}
                    >
                        <menu.icon className="w-6 h-6" />
                        <span>{menu.name}</span>
                    </h2>
                ))}
            </div>
            <div className='fixed bottom-10 p-5 flex gap-2 text-xl font-bold cursor-pointer items-center'>
                <UserButton />
                Profile
            </div>
        </div>
    );
}

export default SideNav;