import { useEffect, useState } from 'react';

export const useHotelDetails = (url) => {
  const [foundHotel, setFoundHotel] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setFoundHotel(data);
        } else {
          setError(`Ошибка получения данных: ${response.statusText}`);
        }
      } catch (error) {
        setError(`Ошибка запроса: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [url]);

  return { foundHotel, error, loading };
};
