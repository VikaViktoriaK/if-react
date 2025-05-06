import React, { useState } from 'react';

import { useOptionsChildAgeStyles } from './OptionsChildAge.styles';

export const OptionsChildAge = () => {
  const numbers = Array.from({ length: 18 }, (_, index) => index);
  const [selectedNumber, setSelectedNumber] = useState(numbers[0]);

  const handleChange = (event) => {
    setSelectedNumber(Number(event.target.value));
  };
  
  const classes = useOptionsChildAgeStyles();

  return (
    <div>
      <div>
        <select
          className={classes.optionsChildAgeSelect}
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
