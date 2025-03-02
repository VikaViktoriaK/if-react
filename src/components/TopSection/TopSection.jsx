import './TopSection.css';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import loadingImg from '../../assets/images/load.gif';
import { authStatuses } from '../../constants/authStatuses';
import { Container } from '../Container';
import { Filter } from '../Filter';
import { Hotels } from '../Hotels';
import { Calendar } from '../Сalendar';
import { useSearchHotelsQuery } from '../../requests/searchRequest';


export const TopSection = () => {
  const [searchParams, setSearchParams] = useState({
    search: '',
    dateFrom: '',
    dateTo: '',
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [filterActive, setFilterActive] = useState(false);

  const navigate = useNavigate();
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );

  const { data: foundHotels, isLoading } = useSearchHotelsQuery(searchParams);

  useEffect(() => {
    if (loggedOut) {
      navigate('/registration');
    }
  }, [loggedOut, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
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
              <label htmlFor="search">Your destination or hotel name</label>
              <input
                name="search"
                id="search"
                type="text"
                placeholder="New York"
                value={searchParams.search}
                onChange={handleChange}
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
                  value={searchParams.search}
                  onChange={handleChange}
                />
              </div>
              <div className="date-mobile">
                <div className="form-elements">
                  <label htmlFor="dateFrom">Check-in date</label>
                  <input
                    id="dateFrom"
                    name="dateFrom"
                    type="date"
                    value={searchParams.dateFrom}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-elements">
                  <label htmlFor="dateTo">Check-out date</label>
                  <input
                    id="dateTo"
                    name="dateTo"
                    type="date"
                    value={searchParams.dateTo}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-mobile-edition">
              <div className="form-elements adults">
                <label htmlFor="adults">Adults</label>
                <input
                  id="adults"
                  name="adults"
                  type="number"
                  min="1"
                  value={searchParams.adults}
                  onChange={handleChange}
                />
              </div>
              <div className="form-elements form-children-border">
                <label htmlFor="children">Children</label>
                <input
                  id="children"
                  name="children"
                  type="number"
                  min="0"
                  value={searchParams.children}
                  onChange={handleChange}
                />
              </div>
              <div className="form-elements">
                <label htmlFor="rooms">Room</label>
                <input
                  id="rooms"
                  name="rooms"
                  type="number"
                  min="1"
                  value={searchParams.rooms}
                  onChange={handleChange}
                />
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
          {isLoading && (
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
