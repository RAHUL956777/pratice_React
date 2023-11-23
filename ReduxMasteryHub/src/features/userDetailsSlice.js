import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_MOCK_API;
// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, rejectWithValue) => {
    const responce = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(responce);
    try {
      const result = await responce.json();
      return result;
    } catch (error) {
      return rejectWithValue("error while calling api endpoint", error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducer: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
  },
});

export default userDetail.reducer;
