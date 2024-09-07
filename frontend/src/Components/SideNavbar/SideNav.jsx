import React, { useEffect } from 'react';
import { BackpackIcon, LayoutGrid, ReceiptText, ShieldCheck } from 'lucide-react';
import { UserButton } from '@clerk/clerk-react';
import { usePathname } from 'next/navigation';

function SideNav() {
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: BackpackIcon,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: 'Upgrade',
            icon: ShieldCheck,
            path: '/dashboard/upgrade'
        }
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen p-5 border shadow-sm flex flex-col'>
            <img src="/" alt="logo" width={160} height={100} />
            <div className='mt-5'>
                {menuList.map((menu) => (
                    <h2 key={menu.id} className={`flex gap-2 items-center text-gray-500 font-medium space p-5 cursor-pointer rounded-md hover:text-white hover:bg-black`}>
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