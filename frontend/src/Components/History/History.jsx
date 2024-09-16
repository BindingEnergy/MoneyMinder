import React from 'react';
import { useGlobalContext } from '../../context/globalContext';

export default function History() {
  const { transactionHistory } = useGlobalContext();

  const history = transactionHistory();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className="bg-[#fcf6f9] border-2 border-white shadow-md p-4 rounded-2xl flex justify-between items-center"
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