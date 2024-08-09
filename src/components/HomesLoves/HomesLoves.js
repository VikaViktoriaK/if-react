import React, { useEffect, useState } from "react";
import "./HomesLoves.css";

export const HomesLoves = () => {
  const [homesLovesData, setHomesLovesData] = useState([]);
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    fetch("https://if-student-api.onrender.com/api/hotels/popular")
      .then((res) => res.json())
      .then((data) => {
        setHomesLovesData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="homes-loves">
      <h2>Homes guests loves</h2>
      <div className="hr-heading"></div>
      <div className="homes-group" id="homes-group">
        {homesLovesData.length > 0 ? (
          homesLovesData.map((item, index) => (
            <div key={index} className="homes-item">
              <img
                src={item.imageUrl || searchParams.get("imageUrl")}
                alt={item.name || searchParams.get("name")}
              />
              <a className="text-homes">
                {item.name || searchParams.get("name")}
              </a>
              <span className="text-country-homes">
                {" "}
                {item.country || searchParams.get("country")}
                {", "}
                {item.city || searchParams.get("city")}
              </span>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};
