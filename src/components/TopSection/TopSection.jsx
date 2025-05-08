import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authStatuses } from '../../constants/authStatuses';
import { Container } from '../Container';
import { Filter } from '../Filter';
import { Calendar } from '../Сalendar';

import { useTopSectionStyles } from './TopSection.styless';


export const TopSection = ({ onSubmit }) => {
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
  const classes = useTopSectionStyles();

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
    onSubmit(searchParams);
  };

  return (
    <div className={classes.topSection}>
      <Container>
        <div className={classes.topContent}>
          <h1>
            Discover stays <br />
            to live, work or just relax
          </h1>
          <form className={classes.form} onSubmit={handleSearchSubmit}>
            <div className={`${classes.formElements} ${classes.country}`}>
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
            <div className={`${classes.formElements} ${classes.date}`}>
              <Calendar />
              <Calendar />
            </div>
            <div className={`${classes.formElements} ${classes.options}`}>
              <input
                name="options"
                type="text"
                onClick={() => setFilterActive(true)}
                placeholder={'1 Adults — 3 Children — 1 Room'}
              />
            </div>
            <button className={classes.formButton} type="submit">
              Search
            </button>
          </form>
          <Filter active={filterActive} setActive={setFilterActive} />
          <div className={classes.apps}>
            <a
              className={classes.google}
              href="https://play.google.com/store/games?hl=ru&gl=US"
            ></a>
            <a
              className={classes.appStore}
              href="https://www.apple.com/ru/app-store/"
            ></a>
          </div>
        </div>
      </Container>
    </div>
  );
};
