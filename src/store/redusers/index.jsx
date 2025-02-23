import { AUTH, USER } from '../../constants/actionTypes';
import { INITIAL_STATE } from '../../constants/initialState';
import { HOTELS_ACTION } from '../actions/action.types';

export const rootReducer = (state = { ...INITIAL_STATE }, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case AUTH.login:
    case AUTH.logout:
      newState.auth.status = action.payload;
      return newState;
    case USER.set:
      return { ...newState, user: action.payload };
    case HOTELS_ACTION.REQUEST:
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: action.payload, error: null },
      };
    case HOTELS_ACTION.SUCCESS:
      return {
        ...newState,
        hotels: { data: action.payload, loading: false, error: null },
      };
    case HOTELS_ACTION.ERROR:
      return {
        ...newState,
        hotels: { ...newState.hotels, loading: false, error: action.payload },
      };
    default:
      return newState;
  }
};
