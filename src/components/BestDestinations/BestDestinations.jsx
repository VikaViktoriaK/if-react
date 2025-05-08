import React from 'react';

import './gth.css';
import { Container } from '../Container';

export const BestDestinations = () => {
  return (
    <div className="destinations">
      <Container>
        <h2>The best destinations</h2>
        <div className="destinations-content">
          <div className="destinations-buttons">
            <button className="button-region">Regions</button>
            <button className="button-cities">Cities</button>
            <button className="button-places">Places of interest</button>
            <button className="button-places-mobile">Places</button>
          </div>
          <div className="destinations-blocks regions-block">
            <div className="open-block">
              <div className="destinations-element">
                <div className="destination-image">
                  <img src="../../assets/images/maldives.png" alt="maldives" />
                </div>
                <button className="destinations-button">Book now</button>
                <a className="destinations-name" href="#">Maldives</a>
              </div>
              <div className="destinations-element">
                <div className="destination-image">
                  <img src="../../assets/images/spain.png" alt="spain" />
                </div>
                <button className="destinations-button">Book now</button>
                <a className="destinations-name" href="#">Spain</a>
              </div>
              <div className="destinations-element none-mobile">
                <div className="destination-image">
                  <img
                    src="../../assets/images/norway.png"
                    alt=""
                    className="destinations-img"
                  />
                </div>
                <button className="destinations-button">Book now</button>
                <a className="destinations-name" href="#">Norway</a>
              </div>
              <div className="destinations-element none-mobile">
                <div className="destination-image">
                  <img
                    src="../../assets/images/island.png"
                    alt=""
                    className="destinations-img"
                  />
                </div>
                <button className="destinations-button">Book now</button>
                <a className="destinations-name" href="#">Island</a>
              </div>
              <div className="hi">
                <button className="destinations-button-next"></button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
