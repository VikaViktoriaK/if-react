import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slices';
import { persistStore } from 'redux-persist';
import { hotelsApi } from '../requests/searchRequest';

export const store = configureStore({
  reducer: {
    ...rootReducer,
    [hotelsApi]: hotelsApi,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    }
  ).concat(hotelsApi),
});

export const persistor = persistStore(store);
