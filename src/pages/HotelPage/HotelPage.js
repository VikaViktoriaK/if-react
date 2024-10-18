import React from "react";
import { Container } from "../../components/Container";
import "./HotelPage.css";

const HotelPage = () => {
  return (
    <div className="hotel-block">
      <Container>
        <div className="hotel-img">
          <img
            src="https://www.google.by/url?sa=i&url=https%3A%2F%2Fwww.minsk-hotel.net%2Fru%2Fproperty%2Feurope-hotel.html&psig=AOvVaw38G57sxw93YUn5Ez33Akwn&ust=1729193980970000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCGvdzTk4kDFQAAAAAdAAAAABAK"
            alt=""
          />
        </div>
        <div className="hotel-name-block">
          <a href="#">Holel name</a>
          <span>Hotel country</span>
        </div>
      </Container>
    </div>
  );
};

export default HotelPage;
