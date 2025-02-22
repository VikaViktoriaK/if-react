import PropTypes from 'prop-types';
import React from 'react';

export const Counter = ({ maxValue, minValue = 0, count, setCount }) => {
  return (
    <>
      <div className="options-item-buttons">
        <button
          className='options-button options-minus-button_js'
          type='button'
          disabled={count === minValue}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="options-counter-number">{count}</span>
        <button
          className='options-button options-plus-button_js'
          type='button'
          disabled={count === maxValue}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  count: PropTypes.number,
  setCount: PropTypes.func,
};
