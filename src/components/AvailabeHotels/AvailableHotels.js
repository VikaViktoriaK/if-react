import React from "react";
import useHotelSearch from "../../hooks/useHotelsSearch";
import { Outlet } from "react-router-dom";

export const AvailableHotels = () => {
  const baseUrl = "https://if-student-api.onrender.com";
  const [foundHotels] = useHotelSearch(baseUrl);

  return <div>{foundHotels.length > 0 && <Outlet />}</div>;
};
