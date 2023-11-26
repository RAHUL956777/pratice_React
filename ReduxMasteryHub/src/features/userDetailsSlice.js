import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_MOCK_API;
// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
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

// read action
export const showUser = createAsyncThunk(
  "showUser",
  async (data, { rejectWithValue }) => {
    const responce = await fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    try {
      const result = await responce.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const responce = await fetch(`${URL}/${id}`, { method: "DELETE" });

    try {
      const result = await responce.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const responce = await fetch(`${URL}/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
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
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete user
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((element) => element.id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
    },
    [createUser.rejected]:(state,action)=>{
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export default userDetail.reducer;
