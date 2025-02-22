// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export const OptionsChildAge = () => {
  const numbers = Array.from({ length: 18 }, (_, index) => index);
  const [selectedNumber, setSelectedNumber] = useState(numbers[0]);

  const handleChange = (event) => {
    setSelectedNumber(Number(event.target.value));
  };

  return (
    <div>
      <div className="options-select-item">
        <select
          className="options-child-age-select"
          name="options-child-age"
          value={selectedNumber}
          onChange={handleChange}
        >
          {numbers.map((number) => (
            <option key={number} value={number}>
              {number} years old
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
