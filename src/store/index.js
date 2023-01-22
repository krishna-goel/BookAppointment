import {configureStore} from '@reduxjs/toolkit';
import {ProductsApi} from 'screen/Api';
import counterSlice from '../reducer/index';

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});
