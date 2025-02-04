export const FETCH_HOTEL_REQUEST = "FETCH_HOTEL_REQUEST";
export const FETCH_HOTELS_SUCCESS = "FETCH_HOTELS_SUCCESS";
export const FETCH_HOTELS_ERROR = "FETCH_HOTELS_ERROR";

export const fetchHotelRequest = () => ({
  type: FETCH_HOTEL_REQUEST,
});

export const fetchHotelsSuccess = (hotels) => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsError = (error) => ({
  type: FETCH_HOTELS_ERROR,
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
