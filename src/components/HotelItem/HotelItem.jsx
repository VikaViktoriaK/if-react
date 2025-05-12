import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from 'react-jss';
import { useNavigate } from 'react-router-dom';

import { useHotelItemStyles } from './HotelItem.styles';

export const HotelItem = ({ id, imageUrl, name, city, country }) => {
  const router = useNavigate();
  const theme = useTheme();
  const classes = useHotelItemStyles({ theme });

  return (
    <div
      key={`${name}${city}${country}`}
    >
      <div className={classes.homesItem}>
        <img className={classes.imgHomes} src={imageUrl} alt={name} />
        <a
          className={classes.textHomes}
          href="#"
          onClick={() => {
            router(`/hotels/${id}`);
          }}
        >
          {name}
        </a>
        <span className={classes.textCountryHomes}>
          {city}, {country}
        </span>
      </div>
    </div>
  );
};

HotelItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
