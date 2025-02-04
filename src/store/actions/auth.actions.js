import { AUTH } from "../../constants/actionTypes";
import { authStatuses } from "../../constants/authStatuses";

export const loginAction = {
  type: AUTH.login,
  payload: authStatuses.loggedIn,
};

export const logoutAction = {
  type: AUTH.logout,
  payload: authStatuses.loggedOut,
};
