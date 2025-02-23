import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelItem.css'

export const HotelItem = ({ id, imageUrl, name, city, country }) => {
  const router = useNavigate();

  return (
    <div
      key={`${name}${city}${country}`}
      id="available-hotels"
      className="available-hotels"
    >
      <div className="homes-item">
        <img className="img-homes" src={imageUrl} alt={name} />
        <a
          className="text-homes"
          href="#"
          onClick={() => {
            router(`/hotels/${id}`);
          }}
        >
          {name}
        </a>
        <span className="text-country-homes">
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
