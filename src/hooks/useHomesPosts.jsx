import { useEffect, useState } from 'react';

export const useHomesPosts = () => {
  const [homesLovesData, setHomesLovesData] = useState([]);

  useEffect(() => {
    fetch('https://if-student-api.onrender.com/api/hotels/popular')
      .then((res) => res.json())
      .then((data) => {
        setHomesLovesData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return homesLovesData;
};
