import { INITIAL_STATE } from "../../constants/initialState";
import { AUTH, USER } from "../../constants/actionTypes";
import {
  FETCH_HOTELS_ERROR,
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
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
    case FETCH_HOTELS_REQUEST.payload:
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
