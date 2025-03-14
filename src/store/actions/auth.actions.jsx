import { createSlice } from '@reduxjs/toolkit';

import { AUTH } from '../../constants/actionTypes';
import { authStatuses } from '../../constants/authStatuses';

export const loginAction = {
  type: AUTH.login,
  payload: authStatuses.loggedIn,
};

export const logoutAction = {
  type: AUTH.logout,
  payload: authStatuses.loggedOut,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: authStatuses.loggedOut,
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = authSlice.actions;
