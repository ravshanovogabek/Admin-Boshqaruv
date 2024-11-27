import React, { useState, useEffect } from 'react';
import './TablePage.css';

const TablePage = ({ setTableData }) => {
  const [data, setData] = useState(() => {
    // Retrieve initial data from localStorage or default if not available
    const savedData = localStorage.getItem('tableData');
    return savedData ? JSON.parse(savedData) : [
      { month: 'Jan', earning: 12000, expense: 8000 },
      { month: 'Feb', earning: 15000, expense: 11000 },
      { month: 'Mar', earning: 20000, expense: 12000 },
      { month: 'Apr', earning: 18000, expense: 9000 },
      { month: 'May', earning: 25000, expense: 14000 },
      { month: 'Jun', earning: 30000, expense: 20000 },
    ];
  });

  const [newData, setNewData] = useState({ month: '', earning: '', expense: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem('tableData', JSON.stringify(data));
    setTableData(data); // Update the shared state for charts
  }, [data, setTableData]);

  const handleAddData = () => {
    if (newData.month && newData.earning && newData.expense) {
      const updatedData = [...data, newData];
      setData(updatedData);
      setNewData({ month: '', earning: '', expense: '' });
      setShowModal(false);
    }
  };

  const handleDeleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div className="table-page-container">
      <div className="buttons-container">
        <button className="add-btn" onClick={() => setShowModal(true)}>
          Add Data
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Earning</th>
              <th>Expense</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.month}</td>
                <td>{row.earning}</td>
                <td>{row.expense}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDeleteData(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding new data */}
      {showModal && (
        <div className="modal-container show">
          <div className="modal-content">
            <h3>Add New Data</h3>
            <label>Month:</label>
            <input
              type="text"
              value={newData.month}
              onChange={(e) => setNewData({ ...newData, month: e.target.value })}
              placeholder="Enter month"
            />
            <label>Earning:</label>
            <input
              type="number"
              value={newData.earning}
              onChange={(e) => setNewData({ ...newData, earning: e.target.value })}
              placeholder="Enter earnings"
            />
            <label>Expense:</label>
            <input
              type="number"
              value={newData.expense}
              onChange={(e) => setNewData({ ...newData, expense: e.target.value })}
              placeholder="Enter expenses"
            />
            <button onClick={handleAddData}>Add Data</button>
            <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePage;
