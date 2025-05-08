import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';

import { Counter } from '../Counter';
import { OptionsChildAge } from '../OptionsChildAge';

import { useFilterStyles } from './Filter.styles';

export const Filter = memo(({ active }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const classes = useFilterStyles();
  return (
    <>
      <div
        className={`${classes.optionsContainer} ${active ? classes.active : ''}`}
      >
        <div className={classes.optionsItems}>
          <div className={classes.optionsItem}>
            <div className={classes.optionsDescriptionText}>
              <span>Adults</span>
            </div>
            <Counter
              maxValue={30}
              minValue={1}
              count={adults}
              setCount={setAdults}
            />
          </div>
          <div className={classes.optionsItem}>
            <div className={classes.optionsDescriptionText}>
              <span>Children</span>
            </div>
            <Counter maxValue={10} count={children} setCount={setChildren} />
          </div>
          <div className={classes.optionsItem}>
            <div className={classes.optionsDescriptionText}>
              <span>Rooms</span>
            </div>
            <Counter
              maxValue={30}
              minValue={1}
              count={rooms}
              setCount={setRooms}
            />
          </div>
        </div>
        {!!children && (
          <div>
            <span className={classes.optionText}>
              What is the age of the child you’re travelling with?
            </span>
            <OptionsChildAge />
          </div>
        )}
      </div>
    </>
  );
});
Filter.displayName = 'Filter';
Filter.propTypes = {
  active: PropTypes.bool.isRequired,
};
