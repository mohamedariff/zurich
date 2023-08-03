import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_API_URL;

export const fetchUsers = createAsyncThunk("user/fetchUsers", (page) => {
  return axios.get(url, { params: { page } });
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    error: null,
    isLoading: false,
    page: 1,
    totalPage: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = [...state.data, ...action.payload.data.data];
      state.error = null;

      state.page = action.payload.data.page;
      state.totalPage = action.payload.data.total_pages;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { getAllUsers } = userSlice.actions;

export default userSlice.reducer;
