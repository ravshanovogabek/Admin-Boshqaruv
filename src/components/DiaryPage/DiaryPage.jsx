import React, { useState, useEffect } from 'react';
import './DiaryPage.css';

const DiaryPage = () => {
  const [entries, setEntries] = useState(() => {
    // Retrieve initial data from localStorage or default if not available
    const savedEntries = localStorage.getItem('diaryEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  const [newEntry, setNewEntry] = useState({
    time: '',
    work: '',
    done: false,
    emoji: ''
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Save entries to localStorage whenever it changes
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    if (newEntry.time && newEntry.work && newEntry.emoji) {
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);
      setNewEntry({ time: '', work: '', done: false, emoji: '' });
      setShowModal(false);
    }
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleMarkDone = (index) => {
    const updatedEntries = entries.map((entry, i) => 
      i === index ? { ...entry, done: !entry.done } : entry
    );
    setEntries(updatedEntries);
  };

  return (
    <div className="diary-page-container">
      <h1>My Diary</h1>

      {entries.length === 0 ? (
        <p>No entries yet. Start adding tasks!</p>
      ) : (
        <div className="entries-container">
          <ul>
            {entries.map((entry, index) => (
              <li key={index} className={entry.done ? 'done' : ''}>
                <span>{entry.time}</span>
                <span>{entry.work}</span>
                <span>{entry.emoji}</span>
                <button onClick={() => handleMarkDone(index)}>
                  {entry.done ? 'Undo' : 'Done'}
                </button>
                <button onClick={() => handleDeleteEntry(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="buttons-container">
        <button onClick={() => setShowModal(true)}>Add Entry</button>
      </div>

      {/* Modal for adding new entry */}
      {showModal && (
        <div className="modal-container show">
          <div className="modal-content">
            <h3>Add New Entry</h3>
            <label>Time:</label>
            <input
              type="text"
              value={newEntry.time}
              onChange={(e) => setNewEntry({ ...newEntry, time: e.target.value })}
              placeholder="Enter time"
            />
            <label>Work:</label>
            <input
              type="text"
              value={newEntry.work}
              onChange={(e) => setNewEntry({ ...newEntry, work: e.target.value })}
              placeholder="What did you do?"
            />
            <label>Emoji:</label>
            <input
              type="text"
              value={newEntry.emoji}
              onChange={(e) => setNewEntry({ ...newEntry, emoji: e.target.value })}
              placeholder="Enter emoji"
            />
            <button onClick={handleAddEntry}>Add Entry</button>
            <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryPage;
