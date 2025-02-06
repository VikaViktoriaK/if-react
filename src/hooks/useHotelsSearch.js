import { useDispatch, useSelector } from "react-redux";
import { searchHotels } from "../store/actions/hotelsSearch.action";

const useHotelSearch = () => {
  const dispatch = useDispatch();
  const { foundHotels, loading } = useSelector(({ hotels }) => ({
    foundHotels: hotels.state,
    loading: hotels.loading,
  }));

  const handleSearch = (searchString) => {
    dispatch(searchHotels(searchString));
  };

  return [foundHotels, loading, handleSearch];
};

export default useHotelSearch;
