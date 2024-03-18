import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../features/authSlice.js";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  // Add other reducers here if needed
});

export const store = configureStore({
  reducer: rootReducer,
});
