import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [newValue, setNewValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddOption = () => {
    if (newValue) {
      setOptions([...options, newValue]);
      setNewValue('');
    }
  };

  return (
    <div className="container">
      <select
        className="select-box"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="selected-value">
        <h3>Selected Value: {selectedValue}</h3>
      </div>

      <div className="add-option">
        <input
          type="text"
          className="option-input"
          value={newValue}
          onChange={(event) => setNewValue(event.target.value)}
        />
        <button className="add-button" onClick={handleAddOption}>
          Add Option
        </button>
      </div>
    </div>
  );
}

export default App;
