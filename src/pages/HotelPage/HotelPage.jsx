import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Calendar } from '../../components/Сalendar';
import { useHotelDetails } from '../../hooks/useHotelDetails';

import { useHotelPageStyles } from './HotelPage.styles';

export const HotelPage = () => {
  const params = useParams();
  const classes = useHotelPageStyles();
  const baseUrl = `https://if-student-api.onrender.com/api/hotels/${params.id}`;
  const [foundHotel] = useHotelDetails(baseUrl);

  return (
    <>
      <div>
        {foundHotel && (
          <div key={foundHotel.name} className={classes.hotelPageBlock}>
            <Container>
              <div className={classes.hotelBlock}>
                <div>
                  <img
                    src={foundHotel.imageUrl}
                    alt={foundHotel.name}
                  />
                </div>
                <div className={classes.hotelDetailsBlock}>
                  <h1 className={classes.hotelName}>{foundHotel.name}</h1>
                  <span>
                    {foundHotel.city}, {foundHotel.country}
                  </span>
                  <div className={classes.calendarBlock}>
                    <span className={classes.selectText}>Select dates</span>
                    <Calendar />
                    <Calendar />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
