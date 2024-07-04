import React from "react";
import { hotelsData } from "../../assets/config";

export const Card = () => (
  <>
    {hotelsData.map((hotelData) => (
      <div className="homes-item" key={hotelData.id}>
        <img
          className="img-homes"
          src={hotelData.imageUrl}
          alt={hotelData.name}
        />
        <a className="text-homes" href="#">
          {hotelData.name}
        </a>
        <span className="text-country-homes">
          {hotelData.country} {hotelData.city}
        </span>
      </div>
    ))}
  </>
);
