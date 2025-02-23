import '../HotelItem/HotelItem.css';

import PropTypes from 'prop-types';
import React from 'react';

import { HotelItem } from '../HotelItem';

export const Hotels = ({ data = [] }) => {
  return data.map((hotel) => (
    <HotelItem
      key={hotel.id}
      id={hotel.id}
      imageUrl={hotel.imageUrl}
      name={hotel.name}
      city={hotel.city}
      country={hotel.country}
    />
  ));
};

Hotels.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  ),
};
