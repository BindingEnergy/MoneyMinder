import React, { useEffect, useRef } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import ChartJS from 'chart.js/auto';

function ChartLine() {
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

  // Line chart data for incomes and expenses over time
  const lineData = {
    labels: incomes.map((income) => new Date(income.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Incomes',
        data: incomes.map((income) => income.amount),
        backgroundColor: 'rgba(102, 187, 106, 0.2)', // Light green with opacity
        borderColor: '#66BB6A', // Light green
        fill: false,
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: expenses.map((expense) => expense.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red with opacity
        borderColor: '#FF6384', // Light red
        fill: false,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="border-2 border-white shadow-md md:p-4 rounded-2xl">
      <div className="h-[50vh]">
        <Line ref={chartRef} data={lineData} options={options} />
      </div>
    </div>
  );
}

export default ChartLine;
