import React, { useState, useEffect } from "react";
import "./Search.css";
import { Calendar } from "../Сalendar";
import useHotelsSearch from "../../hooks/useHotelsSearch";

export const TopSearch = () => {
  const [findingString, setFindingString] = useState("");
  const [findedHotels, setFindedHotels] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loading, error] = useHotelsSearch(findHotels);

  const findHotelsByStr = (hotels, str) => {
    const foundLocations = [];

    for (const hotel of hotels) {
      if (
        hotel.name.toLowerCase().includes(str) ||
        hotel.city.toLowerCase().includes(str) ||
        hotel.country.toLowerCase().includes(str)
      ) {
        foundLocations.push(hotel);
      }
    }

    return foundLocations;
  };

  const createHotelsMarkUp = (data) =>
    data.map(({ imageUrl, name, city, country }) => {
      return (
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
      );
    });

  const findHotels = (event) => {
    event.preventDefault();
    const foundHotels = findHotelsByStr(hotels, findingString.toLowerCase());
    setFindedHotels(foundHotels);
  };

  useEffect(() => {
    const baseUrl = "https://if-student-api.onrender.com/api/hotels";

    fetch(`${baseUrl}/popular`)
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);

  if (loading) {
    return (
      <div>
        <img src="../../assets/images/loading.gif" />
      </div>
    );
  }

  if (error) {
    return <span>Произошла ошибка...</span>;
  }

  return (
    <>
      <form className="form" id="form" action="/">
        <div className="form-elements country form-desktop-edition">
          <label htmlFor="country">Your destination or hotel name</label>
          <input
            name="country"
            id="country"
            type="text"
            placeholder="New York"
            value={findingString}
            onChange={(event) => setFindingString(event.target.value)}
          />
        </div>
        <div className="form-elements date ">
          <Calendar></Calendar>
          <Calendar></Calendar>
        </div>
        {/*<div className="form-elements date form-desktop-edition">*/}
        {/*<label htmlFor="date">Check-in — Check-out</label>*/}
        {/*<input*/}
        {/*  name="date"*/}
        {/*  id="date"*/}
        {/*  type="text"*/}
        {/*  placeholder="Tue 15 Sept — Sat 19 Sept"*/}
        {/*/>*/}
        {/*</div>*/}
        <div className="form-mobile-edition">
          <div className="form-elements country">
            <input
              className="input-country"
              type="text"
              placeholder="Your destination or hotel name"
            />
          </div>
          <div className="date-mobile">
            <div className="form-elements">
              <label htmlFor="date-in">Check-in date</label>
              <input id="date-in" type="text" placeholder="Tue 15 Sept 2020" />
            </div>
            <div className="form-elements">
              <label htmlFor="date-out">Check-out date</label>
              <input id="date-out" type="text" placeholder="Sat 19 Sept 2020" />
            </div>
          </div>
        </div>
        <div className="form-mobile-edition">
          <div className="filter-mobile">
            <div className="form-elements adults">
              <label htmlFor="adults">Adults</label>
              <input id="adults" type="text" placeholder="2" />
            </div>
            <div className="form-elements form-children-border">
              <label htmlFor="children">Children</label>
              <input id="children" type="text" placeholder="0" />
            </div>
            <div className="form-elements">
              <label htmlFor="room">Room</label>
              <input id="room" type="text" placeholder="1" />
            </div>
          </div>
        </div>
        <div
          className="form-elements options form-desktop-edition"
          id="options-filter"
        >
          <input name="options" id="options-input" type="text" />
        </div>
        <button className="form-button" id="form-button" onClick={findHotels}>
          Search
        </button>
      </form>
      {!!findedHotels.length && (
        <div className="available-hotels">
          {createHotelsMarkUp(findedHotels)}
        </div>
      )}
    </>
  );
};
