import React from 'react';
import { useGlobalContext } from '../../context/globalContext';

export default function History() {
  const { transactionHistory } = useGlobalContext();

  const history = transactionHistory();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold mb-4 mr-2 mt-4">Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className="bg-[#white] border-2 border-gray shadow-md p-4 rounded-2xl flex flex-col justify-between items-start w-[85%] lg:h-auto md:text-2xl text-lg font-bold"
          >
            <p className={`font-medium ${type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
              {title}
            </p>
            <p className={`font-medium ${type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
              {type === 'expense' ? `-₹${amount.toFixed(2)}` : `+₹${amount.toFixed(2)}`}
            </p>
          </div>
        );
      })}
    </div>
  );
}