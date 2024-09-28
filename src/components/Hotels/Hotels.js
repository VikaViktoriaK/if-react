import React from "react";
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
