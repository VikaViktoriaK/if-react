import { HOTELS } from '../../constants/actionTypes';

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
