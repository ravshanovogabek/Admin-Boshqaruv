import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import './Statistics.css';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Statistics = () => {
  const barData = {
    labels: ['Cardiology', 'Dermatology', 'Pediatrics', 'Neurology', 'Orthopedics'],
    datasets: [
      {
        label: 'Patients per Department',
        data: [200, 150, 180, 220, 140],
        backgroundColor: ['#4e9f3d', '#76c893', '#d8f3dc', '#52b788', '#1b4332'],
        borderColor: '#1b4332',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Male', 'Female', 'Children'],
    datasets: [
      {
        data: [50, 40, 10],
        backgroundColor: ['#4e9f3d', '#d8f3dc', '#1b4332'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="statistics">
      <h2>Patient Statistics</h2>
      <p>Overview of the patient demographics and department distributions in the clinic.</p>
      <div className="statistics-charts">
        <div className="chart-card">
          <h3>Patients per Department</h3>
          <Bar data={barData} />
        </div>
        <div className="chart-card">
          <h3>Demographics</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
