import React, { useEffect } from 'react';
import Chart from '../../Components/Chart/Chart';
import { useGlobalContext } from '../../context/globalContext';
import { rupee } from '../../utils/icons';
import History from '../../Components/History/History';

function DashboardContents() {
  const { totalExpense, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();

  useEffect(() => {
    getExpense();
    getIncome();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">All Transactions</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <Chart />
        </div>
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          <History />
        </div>
      </div>
    </div>
  );
}

export default DashboardContents;