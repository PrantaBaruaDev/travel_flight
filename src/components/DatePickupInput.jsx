import React, { useState } from "react";

const DatePickupInput = () => {
    const [selectedDate, setSelectedDate] = useState('');
  
    return (
      <div>
        <label htmlFor="date">Select a date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(event) => handleChange(event, setSelectedDate)}
          min={getNextDay()} // Set min to the next day
        />
      </div>
    );
};

export default DatePickupInput;

// Function to get the next day's date in 'YYYY-MM-DD' format
const getNextDay = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleChange = (event, setSelectedDate) => {
    setSelectedDate(event.target.value);
  };