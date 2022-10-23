import { configureStore } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { rootReducer } from './reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'app',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistedStore = configureStore({
//   reducer: persistedReducer,
// });

export const store = configureStore({
  reducer: persistedReducer,
  initialState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
