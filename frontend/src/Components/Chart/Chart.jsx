import React, { useEffect, useRef } from 'react';
import { Line, Pie } from 'react-chartjs-2';
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

  // Helper functions to categorize data
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

  const expenseCategories = categorizeData(expenses, 'expense');
  const incomeCategories = categorizeData(incomes, 'income');

  // Line chart data for incomes and expenses over time
  const lineData = {
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

  // Pie chart data for categorizing expenses and incomes
  const pieDataExpenses = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };

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
      {/* Line chart for incomes and expenses over time */}
      <div className="h-[50vh]">
        <Line ref={chartRef} data={lineData} options={options} />
      </div>

      {/* Pie chart for expenses categorized by category */}
      <div className="mt-8 mb-6 h-[55vh]">
        <h3 className="text-center text-xl font-semibold mb-2">Expenses by Categories</h3>
        <Pie data={pieDataExpenses} options={options} />
      </div>

      {/* Pie chart for incomes categorized by category */}
      <div className="mt-8 mb-6 h-[55vh]">
        <h3 className="text-center text-xl font-semibold mb-2">Incomes by Categories</h3>
        <Pie data={pieDataIncomes} options={options} />
      </div>
    </div>
  );
}

export default Chart;
