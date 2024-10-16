import React from "react";
import PropTypes from "prop-types";
import "./Hotels.css";

export const Hotels = ({ data }) => {
  return data.map(({ imageUrl, name, city, country }) => (
    <div
      key={`${name}${city}${country}`}
      id="available-hotels"
      className="available-hotels"
    >
      <div className="homes-item">
        <img className="img-homes" src={imageUrl} alt={name} />
        <a className="text-homes" href="#">
          {name}
        </a>
        <span className="text-country-homes">
          {city}, {country}
        </span>
      </div>
    </div>
  ));
};

Hotels.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
