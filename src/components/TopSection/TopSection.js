import React from "react";
import { TopSearch } from "../TopSearch";
import "./TopSection.css";
import { Container } from "../Container";

export const TopSection = () => {
  return (
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
          <TopSearch />
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
    </div>
  );
};
