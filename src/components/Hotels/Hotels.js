import React from "react";
import { Link } from "react-router-dom";

const Hotels = ({ data }) => {
  return (
    <ul>
      {data.map((hotel) => (
        <li key={hotel.id}>
          <Link to={hotel.link}>{hotel.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Hotels;
