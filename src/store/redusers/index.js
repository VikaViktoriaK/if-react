import { INITIAL_STATE } from "../../constants/initialState";
import { AUTH, USER } from "../../constants/actionTypes";
import {
  loginAction as FETCH_HOTELS_ERROR,
  loginAction as FETCH_HOTELS_SUCCESS,
  loginAction as FETCH_HOTEL_REQUEST,
} from "../actions";

export const rootReducer = (state = { ...INITIAL_STATE }, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case AUTH.login:
    case AUTH.logout:
      newState.auth.status = action.payload;
      return newState;
    case USER.set:
      return { ...newState, user: action.payload };
    case FETCH_HOTEL_REQUEST.payload:
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: true, error: null },
      };
    case FETCH_HOTELS_SUCCESS.payload:
      return {
        ...newState,
        hotels: { data: action.payload, loading: false, error: null },
      };
    case FETCH_HOTELS_ERROR.payload:
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: false, error: action.payload },
      };
    default:
      return newState;
  }
};
