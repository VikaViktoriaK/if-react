import { INITIAL_STATE } from "../../constants/initialState";
import { AUTH, USER } from "../../constants/actionTypes";

export const rootReducer = (state = { ...INITIAL_STATE }, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case AUTH.login:
    case AUTH.logout:
      newState.auth.status = action.payload;
      return newState;
    case USER.set:
      return { ...newState, user: action.payload };
    case "FETCH_HOTELS_REQUEST":
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: true, error: null },
      };
    case "FETCH_HOTELS_SUCCESS":
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: false, hotels: action.payload },
      };
    case "FETCH_HOTELS_ERROR":
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: false, error: action.payload },
      };
    default:
      return newState;
  }
};
