export const findHotelsByStr = (hotels, str) => {
  const foundLocations = [];

  for (const hotel of hotels) {
    if (
      hotel.name.toLowerCase().includes(str) ||
      hotel.city.toLowerCase().includes(str) ||
      hotel.country.toLowerCase().includes(str)
    ) {
      foundLocations.push(hotel);
    }
  }

  return foundLocations;
};
