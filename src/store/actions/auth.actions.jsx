import { AUTH } from '../../constants/actionTypes';
import { authStatuses } from '../../constants/authStatuses';
import { authSlice } from '../slices/auth.slice';

export const loginAction = {
  type: AUTH.login,
  payload: authStatuses.loggedIn,
};

export const logoutAction = {
  type: AUTH.logout,
  payload: authStatuses.loggedOut,
};

export const { setLoading } = authSlice.actions;
