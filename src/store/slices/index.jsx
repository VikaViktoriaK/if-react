import storage from 'redux-persist/lib/storage';
import { AUTH, USER } from '../../constants/actionTypes';
import { HOTELS_ACTION } from '../actions/action.types';
import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage
}

const initialState = {
  auth: {
    status: null,
  },
  user: {},
  hotels: {
    loading: false,
    data: [],
    error: null,
  }
};

const rootReducerSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AUTH.login, (state, action) => {
        state.auth.status = action.payload;
      })
      .addCase(AUTH.logout, (state, action) => {
        state.auth.status = action.payload;
      })
      .addCase(USER.set, (state, action) => {
        state.user = action.payload;
      })
      .addCase(HOTELS_ACTION.REQUEST, (state, action) => {
        state.hotels.loading = action.payload;
        state.hotels.error = null;
      })
      .addCase(HOTELS_ACTION.SUCCESS, (state, action) => {
        state.hotels.data = action.payload;
        state.hotels.loading = false;
        state.hotels.error = null;
      })
      .addCase(HOTELS_ACTION.ERROR, (state, action) => {
        state.hotels.loading = false;
        state.hotels.error = action.payload;
      });
  }
});

export const rootReducer = persistReducer(persistConfig, rootReducerSlice.reducer);
