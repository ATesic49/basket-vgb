import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { User } from "../../types"; // Add missing import statement for User type
// Define a type for the slice state

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    logInSuccess: (state, action: PayloadAction<User>) => {
      // Update the type annotation of the action parameter
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    logInFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logInStart, logInFailure, logInSuccess, logout } =
  authSlice.actions;
export default authSlice.reducer;
