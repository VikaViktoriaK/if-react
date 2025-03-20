import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setRequest: (state, action) => {
      state.hotels.loading = action.payload;
      state.hotels.error = null;
    },
    setSuccess: (state, action) => {
      state.hotels.data = action.payload;
      state.hotels.loading = false;
      state.hotels.error = null;
    },
    setError: (state, action) => {
      state.hotels.loading = false;
      state.hotels.error = action.payload;
    },
  },
});

export const { setRequest, setSuccess, setError } = hotelsSlice.actions;
