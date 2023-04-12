import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authServices";

const user = JSON.parse(localStorage.getItem("user"));


const initialState = {
user: user ? user : null,
  isError: null,
  isSuccess: false,
  isLoading: false,
  userInfo: null,
  userToken: null,
  message:  "",
};

export const register = createAsyncThunk(
  "auth/register", 
  async (user, thunkAPI) => {
    try {
      return await authServices.registerUser(user)
    } catch (error) {
      const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }    }

)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = ''
    },


  },
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

// export const authAction = authSlice.actions;
export default authSlice.reducer;
