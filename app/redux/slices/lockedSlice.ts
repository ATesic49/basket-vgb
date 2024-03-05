import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";

// Define a type for the slice state
interface LockedState {
  locked: boolean;
}

const initialState: LockedState = {
  locked: false,
};

const lockedSlice = createSlice({
  name: "locked",
  initialState,
  reducers: {
    lock: (state) => {
      state.locked = true;
    },
    unlock: (state) => {
      state.locked = false;
    },
  },
});

export default lockedSlice.reducer;
export const { lock, unlock } = lockedSlice.actions;
