import React from 'react'
import { banktransfer, calendar, comment, crypto, freelancing, investments, other, rupee, salary, stocks, trash, youtube } from '../../utils/icons'
import { Banknote } from 'lucide-react';

function ExpenseItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) 
{ 

    const getCategoryIcon = ()=>{
        switch(category)
        {
            case 'salary':
                return <Banknote className='w-[50px] h-[50px]'/>;
            case 'freelancing':
                return freelancing;
            case 'investments':
                return investments;
            case 'stocks':
                return stocks
            case 'crypto':
                return crypto;
            case 'bank':
                return banktransfer;
            case 'youtube':
                return youtube;
            case 'other':
                return other;
            default:
                return null;
        }
    }

  return (
    <>
    <div className='bg-white border-2 border-white shadow-sm rounded-2xl p-4 mb-4 flex gap-4 w-full h-80 hover:scale-105 items-center'>
        <div className="icon w-40 h-40 rounded-3xl text-5xl bg-white flex items-center justify-center border-2 border-white">
            {getCategoryIcon(category)}
        </div>
        <div className="content flex-1 gap-1">
            <h5 className='text-2xl p-8 relative font-[Poppins] font-bold mb-5 whitespace-nowrap'>{title}</h5>
            <div className="inner-content flex gap-6 justify-between items-center">
                <div className="flex  flex-col align-middle gap-2">
                    <p className="flex items-center gap-1">{rupee} {amount}</p>
                    <p className="flex items-center gap-1">{calendar} {new Date(date).toLocaleDateString()}</p>
                    <p className="flex items-center gap-1">{comment} {description}</p>
                </div>
                <div className="btn-con">
                    <button
                        className='p-2 rounded-md text-black bg-white hover:scale-110 border-black border-4 flex items-center justify-center'
                        onClick={() => {
                            deleteItem(id)
                        }}
                    >
                        {trash}
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ExpenseItem
