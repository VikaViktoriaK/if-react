import React from "react";
import "./TopSection.css";

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="container">
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
          <Search />
          <div className="apps">
            <a
              className="google"
              href="https://play.google.com/store/games?hl=ru&gl=US"
            ></a>
            <a
              className="app-store"
              href="https://www.apple.com/ru/app-store/"
            ></a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
