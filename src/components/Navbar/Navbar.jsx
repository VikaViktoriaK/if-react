import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../Container';

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(true);
  };

  return (
    <div>
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
              <button
                className="button-account"
                onClick={showDropdown}
              ></button>
              <button className="button-menu"></button>
            </div>
          </div>
          {dropdown && (
            <div className="dropdown-block">
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
              <Link className="dropdown-link" to="/registration">
                Sign-out
              </Link>
            </div>
          )}
        </header>
      </Container>
    </div>
  );
};
