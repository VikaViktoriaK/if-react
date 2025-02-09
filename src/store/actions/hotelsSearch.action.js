import { HOTEL } from "../../constants/actionTypes";

export const fetchHotelRequest = () => ({
  type: HOTEL.request,
  payload: null,
});

export const fetchHotelsSuccess = (hotels) => ({
  type: HOTEL.success,
  payload: hotels,
});

export const fetchHotelsError = (error) => ({
  type: HOTEL.error,
  payload: error,
});

export const searchHotels = (searchString) => {
  return async (dispatch) => {
    dispatch(fetchHotelRequest());

    try {
      const response = await fetch(
        `https://if-student-api.onrender.com/api/hotels?search=${searchString}`,
      );
      const hotels = await response.json();
      dispatch(fetchHotelsSuccess(hotels));
    } catch (error) {
      dispatch(fetchHotelsError(error.message));
    }
  };
};
