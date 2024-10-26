import { useEffect, useState } from "react";

const useHotelSearch = (url) => {
  const [foundHotel, setFoundHotel] = useState([]);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setFoundHotel(data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchHotel();
  }, [url]);

  return [foundHotel];
};

export default useHotelSearch;
