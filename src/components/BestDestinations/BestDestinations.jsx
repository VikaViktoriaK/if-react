import React from 'react';
import { useTheme } from 'react-jss';

import islandImg from '../../assets/images/island.png';
import maldivesImg from '../../assets/images/maldives.png';
import norwayImg from '../../assets/images/norway.png';
import spainImg from '../../assets/images/spain.png';
import { Container } from '../Container';

import { useBestDestinationsStyles } from './BestDestinations.styles';

export const BestDestinations = () => {
  const theme = useTheme();
  const classes = useBestDestinationsStyles({ theme });
  
  return (
    <div  className={classes.root}>
      <Container>
        <h2>The best destinations</h2>
        <div className={classes.destinationsContent}>
          <div className={classes.destinationsButtons}>
            <button className={classes.buttonRegion}>Regions</button>
            <button className={classes.buttonCities}>Cities</button>
            <button className={classes.buttonPlaces}>Places of interest</button>
          </div>
          <div className={classes.destinationsBlocks}>
            <div className={classes.openBlock}>
              <div className={classes.destinationsElement}>
                <div className={classes.destinationImage}>
                  <img src={maldivesImg} alt="maldives" />
                </div>
                <button className={classes.destinationsButton}>Book now</button>
                <a className={classes.destinationsName} href="#">
                  Maldives
                </a>
              </div>
              <div className={classes.destinationsElement}>
                <div className={classes.destinationImage}>
                  <img src={spainImg} alt="spain" />
                </div>
                <button className={classes.destinationsButton}>Book now</button>
                <a className={classes.destinationsName} href="#">
                  Spain
                </a>
              </div>
              <div className={classes.destinationsElement}>
                <div className={classes.destinationImage}>
                  <img src={norwayImg} alt="" />
                </div>
                <button className={classes.destinationsButton}>Book now</button>
                <a className={classes.destinationsName} href="#">
                  Norway
                </a>
              </div>
              <div className={classes.destinationsElement}>
                <div className={classes.destinationImage}>
                  <img src={islandImg} alt="island" />
                </div>
                <button className={classes.destinationsButton}>Book now</button>
                <a className={classes.destinationsName} href="#">
                  Island
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
