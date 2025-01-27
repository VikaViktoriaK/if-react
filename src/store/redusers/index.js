import { INITIAL_STATE } from "../../constants/initialState";
import { AUTH, USER } from "../../constants/actionTypes";

export const rootReducer = (state = INITIAL_STATE, action) => {
  const newState = structuredClone(state);

  switch (action.type) {
    case AUTH.login:
    case AUTH.logout:
      newState.auth.status = action.payload;
      return newState;
    case USER.set:
      return { ...newState, user: action.payload };
    default:
      return newState;
  }
};
