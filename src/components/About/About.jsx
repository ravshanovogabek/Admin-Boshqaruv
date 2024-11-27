import React from 'react';
import './About.css';
import { FaUsers, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const About = ({ tableData }) => {
  // You can use tableData for charts data
  const revenueData = tableData;

  // Define colors for the pie chart
  const pieColors = ['#82ca9d', '#8884d8', '#ff8042'];

  return (
    <div className="dashboard-container">
      {/* Statistics Overview */}
      <div className="stats-overview">
        <div className="stat-card">
          <div className="icon">
            <FaUsers />
          </div>
          <div className="details">
            <h3>8.54k</h3>
            <p>Patients</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon">
            <FaClipboardList />
          </div>
          <div className="details">
            <h3>1.42k</h3>
            <p>Appointments</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon">
            <FaDollarSign />
          </div>
          <div className="details">
            <h3>$97.45k</h3>
            <p>Revenue</p>
          </div>
        </div>
      </div>

      {/* Revenue and Expenses Chart */}
      <div className="chart-section">
        {/* Bar Chart for Revenue and Expenses */}
        <div className="chart-card">
          <h3>Revenue Report</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earning" fill="#82ca9d" />
              <Bar dataKey="expense" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart for Patient Growth */}
        <div className="chart-card">
          <h3>Patient Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="earning" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart for Distribution */}
      <div className="chart-card">
        <h3>Revenue Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={revenueData} dataKey="earning" nameKey="month" cx="50%" cy="50%" outerRadius={60} fill="#82ca9d" label>
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default About;
