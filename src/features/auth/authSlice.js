import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isError: null,
  isSuccess: false,
  isLoading: false,
  message: "",
};

///Register User
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // reset: (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    //   state.isError = false;
    //   state.message = "";
    // },
  },
    extraReducers: {
        [authService.pending]: (state) => {
            state.isLoading = true,
                state.isError = null
        },
        [authService.fulfilled]: (state, { payload }) => {
            state. isLoading = false,
                state.isSuccess = true
        }, 
        [authService.rejected]: (state, { payload }) => {
            state.isLoading = false
            state.isError = payload
        }
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
