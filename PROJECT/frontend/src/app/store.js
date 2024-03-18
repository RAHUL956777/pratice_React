import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../features/authSlice.js";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
