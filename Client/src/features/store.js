import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice/cartSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    cart: persistReducer(persistConfig, cartSlice.reducer),
  },
});

export const persistor = persistStore(store);

persistor.purge();