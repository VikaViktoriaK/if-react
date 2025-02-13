import { INITIAL_STATE } from "../../constants/initialState";
import { AUTH, HOTELS, USER } from "../../constants/actionTypes";

export const rootReducer = (state = { ...INITIAL_STATE }, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case AUTH.login:
    case AUTH.logout:
      newState.auth.status = action.payload;
      return newState;
    case USER.set:
      return { ...newState, user: action.payload };
    case HOTELS.request:
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: action.payload, error: null },
      };
    case HOTELS.success:
      return {
        ...newState,
        hotels: { data: action.payload, loading: false, error: null },
      };
    case HOTELS.error:
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: false, error: action.payload },
      };
    default:
      return newState;
  }
};
