import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { authSlice } from "./slices/auth.slice";
import { userSlice } from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
