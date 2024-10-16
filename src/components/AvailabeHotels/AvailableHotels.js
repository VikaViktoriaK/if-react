import React from "react";
import { Hotels } from "../Hotels";
import useHotelSearch from "../../hooks/useHotelsSearch";

export const AvailableHotels = () => {
  const baseUrl = "https://if-student-api.onrender.com";
  const [foundHotels] = useHotelSearch(baseUrl);

  return <div>{foundHotels.length > 0 && <Hotels data={foundHotels} />}</div>;
};
