import React from "react";

import useHotelSearch from "../../hooks/useHotelsSearch";
import { Hotels } from "../Hotels";

export const AvailableHotels = () => {
  const baseUrl = "https://if-student-api.onrender.com";
  const [foundHotels] = useHotelSearch(baseUrl);

  return <div>{foundHotels.length > 0 && <Hotels data={foundHotels} />}</div>;
};
