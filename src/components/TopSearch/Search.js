import React, { useState } from "react";
import "./Search.css";
import { Calendar } from "../Сalendar";
import { Hotels } from "../Hotels";
import loadingImg from "../../assets/images/loading.gif";
import { Filter } from "../Filter";

const baseUrl = "https://if-student-api.onrender.com";

export const TopSearch = () => {
  const [searchString, setSearchString] = useState("");
  const [foundHotels, setFoundHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`${baseUrl}/api/hotels?search=${searchString}`)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((foundHotels) => {
        setFoundHotels(foundHotels);
      })
      .catch((err) => {
        console.log("Fetch Error :-S", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
            value={searchString}
            onChange={(event) => setSearchString(event.target.value)}
          />
        </div>
        <div className="form-elements date ">
          <Calendar />
          <Calendar />
        </div>
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
          <div className="form-elements adults">
            <label form="adults">Adults</label>
            <input id="adults" type="text" placeholder="2" />
          </div>
          <div className="form-elements form-children-border">
            <label form="children">Children</label>
            <input id="children" type="text" placeholder="0" />
          </div>
          <div className="form-elements">
            <label form="room">Room</label>
            <input id="room" type="text" placeholder="1" />
          </div>
        </div>
        <div className="form-elements options form-desktop-edition">
          <input
            name="options"
            id="options-input"
            type="text"
            onClick={() => setFilterActive(true)}
          />
        </div>
        <button className="form-button" id="form-button" onClick={handleSearch}>
          Search
        </button>
      </form>
      <Filter active={filterActive} setActive={setFilterActive} />
      {loading && (
        <div>
          <img src={loadingImg} alt="Loading..." />
        </div>
      )}
      {!!foundHotels.length && (
        <div className="available-hotels">
          <Hotels data={foundHotels} />
        </div>
      )}
    </>
  );
};
