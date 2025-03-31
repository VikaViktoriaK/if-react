import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import { authSlice } from "./slices/auth.slice";
import { userSlice } from "./slices/user.slice";
import { homesApi } from './apis/hotels/getPopularHotels.endpoint'; // Importing homesApi
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {hotelsApi} from './apis/hotels/hotels.api';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [hotelsApi.reducerPath]: hotelsApi.reducer,
  [homesApi.reducerPath]: homesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(hotelsApi.middleware, homesApi.middleware),
});

export const persistor = persistStore(store);
