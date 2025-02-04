import { useDispatch, useSelector } from "react-redux";
import { searchHotels } from "../store/actions/hotelsSearch.action";

const useHotelSearch = () => {
  const dispatch = useDispatch();
  const foundHotels = useSelector((state) => state.hotels.state);
  const loading = useSelector((state) => state.hotels.loading);

  const handleSearch = (searchString) => {
    dispatch(searchHotels(searchString));
  };

  return [foundHotels, loading, handleSearch];
};

export default useHotelSearch;
