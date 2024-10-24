import React from "react";
import { Container } from "../Container";

export const Navbar = () => {
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
              <button className="button-account"></button>
              <button className="button-menu"></button>
            </div>
          </div>
        </header>
      </Container>
    </div>
  );
};
