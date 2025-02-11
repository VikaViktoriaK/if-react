import { HOTELS } from "../../constants/actionTypes";

export const fetchHotelRequest = (loading) => ({
  type: HOTELS.request,
  payload: loading,
});

export const fetchHotelsSuccess = (hotels) => ({
  type: HOTELS.success,
  payload: hotels,
});

export const fetchHotelsError = (error) => ({
  type: HOTELS.error,
  payload: error.message,
});

export const searchHotels = (searchString) => async (dispatch) => {
  dispatch(fetchHotelRequest(true));
  try {
    const response = await fetch(
      `https://if-student-api.onrender.com/api/hotels?search=${searchString}`,
    );
    const data = await response.json();
    dispatch(fetchHotelsSuccess(data));
  } catch (error) {
    dispatch(fetchHotelsError(error));
  } finally {
    dispatch(fetchHotelRequest(false));
  }
};
