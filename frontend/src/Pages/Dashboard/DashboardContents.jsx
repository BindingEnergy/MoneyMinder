import React, { useEffect } from 'react';
import Chart from '../../Components/Chart/Chart';
import { useGlobalContext } from '../../context/globalContext';
import { rupee } from '../../utils/icons';
import History from '../../Components/History/History';

function DashboardContents() {
  const { totalExpense, totalIncome, totalBalance, getIncome, getExpense } = useGlobalContext();
  const netExpense = totalExpense();
  const netIncome = totalIncome();
  const netBalance = totalBalance();

  useEffect(() => {
    getExpense();
    getIncome();
  }, []);

  return (
    <div className="p-4 w-[90%]">
      <h1 className='font-bold md:text-5xl font-[Poppins] text-4xl mb-5'>All Transactions</h1>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center text-center md:w-[30vw] w-[85%]">
        <div className="net-income text-3xl font-semibold border shadow-md rounded-lg h-40">
          <h3 className="income mb-5">Income</h3>
          <p className='text-4xl text-green-500'>₹ {netIncome}</p>
        </div>
        <div className="net-expense text-3xl font-semibold border shadow-md rounded-lg h-40">
          <h3 className="expense mb-5">Expense</h3>
          <p className='text-4xl text-red-500'>₹ {netExpense}</p>
        </div>
        <div className="md:col-span-2">
          <div className="balance text-3xl font-semibold border shadow-md rounded-lg h-40">
            <h3 className="balance mb-5">Balance</h3>
            <p className={` text-5xl ${netBalance < 0 ? 'text-red-500' : 'text-green-500'}`}>{netBalance < 0 ? `-₹ ${Math.abs(netBalance)}` : `+₹ ${netBalance}`}</p>
          </div>
        </div>
      </div>

      <div className="chart-history-status md:flex md:flex-row">
        <div className="chart p-5 flex flex-col md:w-[50vw] w-[90%]">
          <h3 className='text-4xl font-semibold whitespace-nowrap mb-4'>Transactions Chart</h3>
          <Chart/>
        </div>
        <div className="history md:w-[30vw] text-xl">
          <History/>
        </div>
      </div>
    </div>
  );
}

export default DashboardContents;