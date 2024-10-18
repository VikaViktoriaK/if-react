import React, { useState } from "react";
import "./TopSection.css";
import { Container } from "../Container";
import { Calendar } from "../Сalendar";
import { Filter } from "../Filter";
import loadingImg from "../../assets/images/load.gif";
import { Hotels } from "../Hotels";
import "../TopSearch/Search.css";

const baseUrl = "https://if-student-api.onrender.com";

export const TopSection = () => {
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
      <div className="top-section">
        <Container>
          <header className="header">
            <div className="header-logo"></div>
            <div className="header-sections">
              <div className="header-links">
                <a href="#">Stays</a>
                <a href="#">Attractions</a>
              </div>
              <div className="header-buttons">
                <button className="button-night"></button>
                <button className="button-account"></button>
                <button className="button-menu"></button>
              </div>
            </div>
          </header>
          <div className="top-content">
            <h1>
              Discover stays <br />
              to live, work or just relax
            </h1>
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
                    <input
                      id="date-in"
                      type="text"
                      placeholder="Tue 15 Sept 2020"
                    />
                  </div>
                  <div className="form-elements">
                    <label htmlFor="date-out">Check-out date</label>
                    <input
                      id="date-out"
                      type="text"
                      placeholder="Sat 19 Sept 2020"
                    />
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
                  placeholder={`1 Adults — 3 Children — 1 Room`}
                />
              </div>
              <button
                className="form-button"
                id="form-button"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
            <Filter active={filterActive} setActive={setFilterActive} />
            {loading && (
              <div>
                <img src={loadingImg} alt="Loading..." />
              </div>
            )}
            <div className="apps">
              <a
                className="google"
                href="https://play.google.com/store/games?hl=ru&gl=US"
              ></a>
              <a
                className="app-store"
                href="https://www.apple.com/ru/app-store/"
              ></a>
            </div>
          </div>
        </Container>
        <div className="ah">
          {!!foundHotels.length && (
            <div className="available-hotels-block">
              <h2>Available hotels</h2>
              <Container>
                <div className="available-hotels">
                  <Hotels data={foundHotels} />
                </div>
              </Container>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
