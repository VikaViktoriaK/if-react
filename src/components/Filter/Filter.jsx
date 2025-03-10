import './Filter.css';

import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';

import { Counter } from '../Counter';
import { OptionsChildAge } from '../OptionsChildAge';

export const Filter = memo(({ active }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  return (
    <>
      <div
        className={active ? 'options-container active' : 'options-container'}
      >
        <div className="options-container-block">
          <div className="options-items" id="options-items">
            <div className="options-item">
              <div className="options-description-text">
                <span>Adults</span>
              </div>
              <Counter
                maxValue={30}
                minValue={1}
                count={adults}
                setCount={setAdults}
              />
            </div>
            <div className="options-item">
              <div className="options-description-text">
                <span>Children</span>
              </div>
              <Counter maxValue={10} count={children} setCount={setChildren} />
            </div>
            <div className="options-item">
              <div className="options-description-text">
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
              <span className="options-text">
                What is the age of the child you’re travelling with?
              </span>
              <OptionsChildAge />
            </div>
          )}
        </div>
      </div>
    </>
  );
});

Filter.displayName = 'Filter';

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
};
