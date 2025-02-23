import { useDispatch, useSelector } from 'react-redux';
import { hotelsError, hotelsRequest, hotelsSuccess } from '../store/actions/hotelsSearch.action';

export const useHotelSearch = () => {
  const dispatch = useDispatch();
  const { foundHotels, loading } = useSelector(({ hotels }) => ({
    foundHotels: hotels.data,
    loading: hotels.loading,
  }));

  const handleSearch = async (searchString) => {
    dispatch(hotelsRequest(true));
    try {
      const response = await fetch(
        `https://if-student-api.onrender.com/api/hotels?search=${searchString}`
      );
      const data = await response.json();
      dispatch(hotelsSuccess(data));
    } catch (error) {
      dispatch(hotelsError(error));
    } finally {
      dispatch(hotelsRequest(false));
    }
  };

  return [foundHotels, loading, handleSearch];
};
