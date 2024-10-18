import React from "react";
import "./HomesLoves.css";
import { Hotels } from "../Hotels";
import { useHomesPosts } from "../../hooks/useHomesPosts";
import HotelPage from "../../pages/HotelPage/HotelPage";

export const HomesLoves = () => {
  const homesLovesData = useHomesPosts();

  return (
    <div className="homes-loves">
      <h2>Homes guests loves</h2>
      <div className="hr-heading"></div>
      <div className="homes-group" id="homes-group">
        <Hotels data={homesLovesData} />
      </div>
      <HotelPage />
    </div>
  );
};
