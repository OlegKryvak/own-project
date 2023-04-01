import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import settingsReducer from './reducers/settings';
import persistConfig from './persistConfig';

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings: settingsReducer
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

const persistor = persistStore(store);

export { store, persistor };
