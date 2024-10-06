import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ExcelAnalysis = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({
    WaterUsed: 0,
    Fertilizer: 0,
    LaborHours: 0,
  });
  const [monthlyInputs, setMonthlyInputs] = useState(
    Array(5).fill({ WaterUsed: '', Fertilizer: '', LaborHours: '' })
  );
  const [averages, setAverages] = useState({ WaterUsed: 0, Fertilizer: 0, LaborHours: 0 });

//   useEffect(() => {
//     // Load saved data from localStorage on component mount
//     const savedInputs = JSON.parse(localStorage.getItem('monthlyInputs'));
//     const savedAverages = JSON.parse(localStorage.getItem('averages'));
    
//     if (savedInputs) setMonthlyInputs(savedInputs);
//     if (savedAverages) setAverages(savedAverages);
//   }, []);

  // Handle monthly input changes
  const handleMonthlyInputChange = (monthIndex, event) => {
    const { name, value } = event.target;
    const newMonthlyInputs = [...monthlyInputs];
    newMonthlyInputs[monthIndex] = {
      ...newMonthlyInputs[monthIndex],
      [name]: parseFloat(value),
    };
    setMonthlyInputs(newMonthlyInputs);
  };

  // Calculate averages for the inputs
  const calculateAverages = () => {
    const totalInputs = monthlyInputs.reduce(
      (acc, curr) => {
        acc.WaterUsed += curr.WaterUsed;
        acc.Fertilizer += curr.Fertilizer;
        acc.LaborHours += curr.LaborHours;
        return acc;
      },
      { WaterUsed: 0, Fertilizer: 0, LaborHours: 0 }
    );

    const numMonths = monthlyInputs.length;
    const calculatedAverages = {
      WaterUsed: (totalInputs.WaterUsed / numMonths).toFixed(2),
      Fertilizer: (totalInputs.Fertilizer / numMonths).toFixed(2),
      LaborHours: (totalInputs.LaborHours / numMonths).toFixed(2),
    };

    setAverages(calculatedAverages);
    // Save averages and inputs to localStorage
    localStorage.setItem('monthlyInputs', JSON.stringify(monthlyInputs));
    localStorage.setItem('averages', JSON.stringify(calculatedAverages));
  };

  // Prepare chart data for averages
  const chartData = {
    labels: [`Month 1`, `Month 2`, `Month 3`, `Month 4`, `Month 5`],
    datasets: [
      {
        label: 'Average Water Used (liters)',
        data: monthlyInputs.map(input => input.WaterUsed),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
      {
        label: 'Average Fertilizer (kg)',
        data: monthlyInputs.map(input => input.Fertilizer),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
      },
      {
        label: 'Average Labor Hours',
        data: monthlyInputs.map(input => input.LaborHours),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-5">
      <h1 className="flex text-2xl font-bold mb-4 justify-center">Farm Analytics Dashboard</h1>

      <h2 className="text-xl font-semibold mb-2">Monthly Inputs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {monthlyInputs.map((input, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h4 className="font-semibold mb-2">Month {index + 1}</h4>
            <label className="block mb-2">
              Water (rainfall):
              <input
                type="number"
                name="WaterUsed"
                value={input.WaterUsed}
                onChange={(event) => handleMonthlyInputChange(index, event)}
                className="block w-full border border-gray-300 rounded p-2"
              />
            </label>
            <label className="block mb-2">
              Fertilizer (kg):
              <input
                type="number"
                name="Fertilizer"
                value={input.Fertilizer}
                onChange={(event) => handleMonthlyInputChange(index, event)}
                className="block w-full border border-gray-300 rounded p-2"
              />
            </label>
            <label className="block mb-2">
              Labor Hours:
              <input
                type="number"
                name="LaborHours"
                value={input.LaborHours}
                onChange={(event) => handleMonthlyInputChange(index, event)}
                className="block w-full border border-gray-300 rounded p-2"
              />
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={calculateAverages}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Calculate Averages
      </button>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Averages:</h3>
        <p>Water Used: {averages.WaterUsed} liters</p>
        <p>Fertilizer: {averages.Fertilizer} kg</p>
        <p>Labor Hours: {averages.LaborHours} hours</p>
      </div>

      {/* Line Chart Section */}
      <h2 className="text-xl font-semibold mb-2">Average Inputs Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ExcelAnalysis;
