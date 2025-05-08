import React from 'react';

import { useOffersStyles } from './Offers.styles';

export const Offers = () => {
  const classes = useOffersStyles();
  
  return (
    <div className={classes.containerOffer}>
      <h2>What do we offer</h2>
      <div className={classes.offersGroup}>
        <div className={classes.offersItem}>
          <div className={classes.imgWrapper}>
            <svg
              width="76"
              height="92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.167 54.333V71h-8.334V54.333h8.334Zm-50 0V71H13a4.179 4.179 0 0 1-4.167-4.167v-12.5h8.334ZM38 .167C17.292.167.5 16.958.5 37.667v29.166c0 6.917 5.583 12.5 12.5 12.5h12.5V46H8.833v-8.333C8.833 21.542 21.875 8.5 38 8.5s29.167 13.042 29.167 29.167V46H50.5v33.333h16.667V83.5H38v8.333h25c6.917 0 12.5-5.583 12.5-12.5V37.667c0-20.709-16.792-37.5-37.5-37.5Z"
                fill="#3077C6"
              />
            </svg>
          </div>
          <p className={classes.textOffer}>Support 24/7</p>
        </div>
        <div className={classes.offersItem}>
          <div className={classes.imgWrapper}>
            <svg
              width="100"
              height="100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.5 16.667v29.166H21.542l-4.875 4.875V16.667H62.5Zm4.167-8.334H12.5A4.179 4.179 0 0 0 8.333 12.5v58.333L25 54.167h41.667A4.179 4.179 0 0 0 70.833 50V12.5a4.179 4.179 0 0 0-4.166-4.167ZM87.5 25h-8.333v37.5H25v8.333A4.179 4.179 0 0 0 29.167 75H75l16.667 16.667v-62.5A4.179 4.179 0 0 0 87.5 25Z"
                fill="#3077C6"
              />
            </svg>
          </div>
          <p className={classes.textOffer}>Communicate directly</p>
        </div>
        <div className={classes.offersItem}>
          <div className={classes.imgWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="68"
              fill="none"
            >
              <path
                fill="#3077C6"
                d="M16.667 9h75V.667h-75C12.083.667 8.333 4.417 8.333 9v45.833H0v12.5h58.333v-12.5H16.667V9Zm79.166 8.333h-25a4.179 4.179 0 0 0-4.166 4.167v41.667a4.179 4.179 0 0 0 4.166 4.166h25A4.179 4.179 0 0 0 100 63.167V21.5a4.179 4.179 0 0 0-4.167-4.167Zm-4.166 37.5H75V25.667h16.667v29.166Z"
              />
            </svg>
          </div>
          <p className={classes.textOffer}>Book online</p>
        </div>
        <div className={classes.offersItem}>
          <div className={classes.imgWrapper}>
            <svg
              width="100"
              height="100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M87.5 33.333H61.208l3.959-19.041.125-1.334a6.272 6.272 0 0 0-1.834-4.416l-4.416-4.375-27.417 27.458a8.147 8.147 0 0 0-2.458 5.875v41.667c0 4.583 3.75 8.333 8.333 8.333H75a8.277 8.277 0 0 0 7.667-5.083L95.25 53.042A8.232 8.232 0 0 0 95.833 50v-8.333c0-4.584-3.75-8.334-8.333-8.334ZM87.5 50 75 79.167H37.5V37.5l18.083-18.083-4.625 22.25H87.5V50ZM4.167 37.5h16.666v50H4.167v-50Z"
                fill="#3077C6"
              />
            </svg>
          </div>
          <p className={classes.textOffer}>Real guest reviews</p>
        </div>
      </div>
    </div>
  );
};
