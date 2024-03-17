import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice.js";

export const store = configureStore({
  reducer: authSlice,
});
