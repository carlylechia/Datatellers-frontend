import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
// import { categoriesApi } from './api-functions/categories';

const rootReducer = combineReducers({
  // [categoriesApi.reducerPath]: categoriesApi.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line no-undef
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
