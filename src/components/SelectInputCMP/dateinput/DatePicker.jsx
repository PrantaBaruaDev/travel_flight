import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  // Function to get the next day's date in 'YYYY-MM-DD' format
  const getNextDay = () => {
    const today = new Date();
    // today.setDate(today.getDate() + 1); // Increment to the next day
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const nextDay = getNextDay(); // Get the next day

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="date">Select a date:</label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={handleChange}
        min={nextDay} // Set min to the next day
      />
    </div>
  );
};

export default DatePicker;
