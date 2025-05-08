import PropTypes from 'prop-types';
import React from 'react';

import { useCounterStyles } from './Counter.styles';

export const Counter = ({ maxValue, minValue = 0, count, setCount }) => {
  const classes = useCounterStyles();

  return (
    <div className={classes.optionsItemButtons}>
      <button
        className={classes.optionsButton}
        type='button'
        disabled={count === minValue}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span className={classes.optionsCounterNumber}>{count}</span>
      <button
        className={classes.optionsButton}
        type='button'
        disabled={count === maxValue}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
