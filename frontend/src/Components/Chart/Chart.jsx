import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import ChartJS from 'chart.js/auto';

function Chart() {
  const { incomes, expenses } = useGlobalContext();
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [incomes, expenses]);

  const data = {
    labels: incomes.map((income) => new Date(income.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Incomes',
        data: incomes.map((income) => income.amount),
        backgroundColor: 'green',
        borderColor: 'green',
        fill: false,
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: expenses.map((expense) => expense.amount),
        backgroundColor: 'red',
        borderColor: 'red',
        fill: false,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="bg-[#fcf6f9] border-2 border-white shadow-md p-4 rounded-2xl h-full">
      <Line ref={chartRef} data={data} />
    </div>
  );
}

export default Chart;