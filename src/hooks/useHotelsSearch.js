import { useState } from "react";

const useHotelSearch = (baseUrl) => {
  const [foundHotels, setFoundHotels] = useState([]);

  const handleSearch = (searchString) => {
    fetch(`${baseUrl}/api/hotels?search=${searchString}`)
      .then((response) => response.json())
      .then(setFoundHotels)
      .catch((err) => console.log("Fetch Error :-S", err));
  };

  return [foundHotels, handleSearch];
};

export default useHotelSearch;
