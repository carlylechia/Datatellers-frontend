import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import { schedulesApi } from './api-functions';

const rootReducer = combineReducers({
  [schedulesApi.reducerPath]: schedulesApi.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(schedulesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
