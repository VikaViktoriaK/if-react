import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
