import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slices';
import { persistStore } from 'redux-persist';


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: {
      ignoredActions: ['persist/PERSIST']
      }
    }
  )
});

export const persistor = persistStore(store)
