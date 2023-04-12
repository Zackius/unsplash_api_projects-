import { createSlice } from "@reduxjs/toolkit";
import authServices from "./authServices";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isError: null,
  isSuccess: false,
  isLoading: false,
  userInfo: null,
  userToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authServices.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(authServices.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true; ///user registration is succesful
      })
      .addCase(authServices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

// export const { reset } = authSlice.actions;
export default authSlice.reducer;
