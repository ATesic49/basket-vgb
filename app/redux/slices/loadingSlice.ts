import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import prisma from "@/lib/prisma";
import { User } from "../../types"; // Add missing import statement for User type
import { log } from "console";
// Define a type for the slice state

interface loadingState {
  loading: boolean;
}

const initialState: loadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      // Update the type annotation of the action parameter
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, endLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
