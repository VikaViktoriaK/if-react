import { createSlice } from '@reduxjs/toolkit';
import { authStatuses } from '../../constants/authStatuses';

export const initialState = {
  status: authStatuses.loggedOut,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setLoading, setStatus } = authSlice.actions;
