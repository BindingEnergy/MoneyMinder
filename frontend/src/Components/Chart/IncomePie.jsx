import React, { useEffect, useRef } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import ChartJS from 'chart.js/auto';

function IncomePie() {
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

  const categorizeData = (data, type) => {
    const categories = {};
    data.forEach((item) => {
      if (categories[item.category]) {
        categories[item.category] += item.amount;
      } else {
        categories[item.category] = item.amount;
      }
    });
    return categories;
  };

  const incomeCategories = categorizeData(incomes, 'income');

  const pieDataIncomes = {
    labels: Object.keys(incomeCategories),
    datasets: [
      {
        data: Object.values(incomeCategories),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="border-2 border-white shadow-md md:p-4 rounded-2xl">
      <div className="mt-8 mb-6 h-[47vh]">
        <h3 className="text-center text-xl font-semibold mb-2">Incomes by Categories</h3>
        <Pie data={pieDataIncomes} options={options} />
      </div>
    </div>
  );
}

export default IncomePie;
