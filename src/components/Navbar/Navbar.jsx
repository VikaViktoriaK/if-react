import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Container';

import { useNavbarStyles } from './Navbar.styles';

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const classes = useNavbarStyles();

  const showDropdown = () => {
    setDropdown(true);
  };

  return (
    <div>
      <Container>
        <header className={classes.header}>
          <div className={classes.headerLogo}></div>
          <div className={classes.headerSections}>
            <div className={classes.headerLinks}>
              <a href="#">Stays</a>
              <a href="#">Attractions</a>
            </div>
            <div className={classes.headerButtons}>
              <button className={classes.buttonNight}></button>
              <button
                className={classes.buttonAccount}
                onClick={showDropdown}
              ></button>
            </div>
          </div>
          {dropdown && (
            <div className={classes.dropdownBlock}>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                  fill="#333333"
                />
              </svg>
              <Link className={classes.dropdownLink} to="/registration">
                Sign-out
              </Link>
            </div>
          )}
        </header>
      </Container>
    </div>
  );
};
