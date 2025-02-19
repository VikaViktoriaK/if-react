import './TopSection.css';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import loadingImg from '../../assets/images/load.gif';
import { authStatuses } from '../../constants/authStatuses';
import { useHotelSearch } from '../../hooks/useHotelsSearch';
import { Container } from '../Container';
import { Filter } from '../Filter';
import { Hotels } from '../Hotels';
import { Calendar } from '../Сalendar';

export const TopSection = () => {
  const [searchString, setSearchString] = useState('');
  const [filterActive, setFilterActive] = useState(false);

  const navigate = useNavigate();
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );

  const [foundHotels, loading, handleSearch] = useHotelSearch();
  useEffect(() => {
    if (loggedOut) {
      navigate('/registration');
    }
  }, [loggedOut, navigate]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchString);
  };

  return (
    <div className="top-section">
      <Container>
        <div className="top-content">
          <h1>
            Discover stays <br />
            to live, work or just relax
          </h1>
          <form className="form" id="form" onSubmit={handleSearchSubmit}>
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
            <div className="form-elements date">
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
            <div className="form-elements options form-desktop-edition">
              <input
                name="options"
                id="options-input"
                type="text"
                onClick={() => setFilterActive(true)}
                placeholder={'1 Adults — 3 Children — 1 Room'}
              />
            </div>
            <button className="form-button" id="form-button" type="submit">
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
      {foundHotels && foundHotels.length > 0 && (
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
  );
};
