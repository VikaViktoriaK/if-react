import './HotelPage.css';

import React from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Calendar } from '../../components/Сalendar';
import { useHotelDetails } from '../../hooks/useHotelDetails';

export const HotelPage = () => {
  const params = useParams();
  const baseUrl = `https://if-student-api.onrender.com/api/hotels/${params.id}`;
  const [foundHotel] = useHotelDetails(baseUrl);

  return (
    <>
      <div>
        {foundHotel && (
          <div key={foundHotel.name} className="hotel-page-block">
            <Container>
              <div className="hotel-block">
                <div>
                  <img
                    className="img-homes"
                    src={foundHotel.imageUrl}
                    alt={foundHotel.name}
                  />
                </div>
                <div className="hotel-details-block">
                  <h1 className="hotel-name">{foundHotel.name}</h1>
                  <span className="text-hotel-country">
                    {foundHotel.city}, {foundHotel.country}
                  </span>
                  <div className="calendar-block">
                    <span className="select-text">Select dates</span>
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
