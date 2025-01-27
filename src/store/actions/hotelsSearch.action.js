import { hotelsData } from "../../assets/config";

export const fetchHotelRequest = {
  type: "FETCH_HOTEL_REQUEST",
};

export const fetchHotelsSuccess = {
  type: "FETCH_HOTELS_SUCCESS",
  payload: hotelsData,
};

export const fetchHotelsError = (error) => ({
  type: "FETCH_HOTELS_ERROR",
  payload: error,
});

export const searchHotels = (searchString) => {
  return async (dispatch) => {
    dispatch(fetchHotelRequest);

    try {
      const response = await fetch(
        `https://if-student-api.onrender.com/api/hotels?search=${searchString}`,
      );
      await response.json();
      dispatch({
        type: "FETCH_HOTELS_SUCCESS",
        payload: hotelsData,
      });
    } catch (error) {
      dispatch(fetchHotelsError(error.message));
    }
  };
};
