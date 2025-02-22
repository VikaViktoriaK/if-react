import { useDispatch, useSelector } from 'react-redux';

import { fetchHotelRequest, fetchHotelsError, fetchHotelsSuccess } from '../store/actions/hotelsSearch.action';

export const useHotelSearch = () => {
  const dispatch = useDispatch();
  const { foundHotels, loading } = useSelector(({ hotels }) => ({
    foundHotels: hotels.data,
    loading: hotels.loading,
  }));

  const handleSearch = async (searchString) => {
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

  return [foundHotels, loading, handleSearch];
};
