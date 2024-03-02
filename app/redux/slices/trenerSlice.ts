import { createSlice } from "@reduxjs/toolkit";

export type trener = {
  id: number;
  ime: string;
  slika: string;
  nadimak: string;
  xena: number;
  odeljenje: String;
};

type initialStateType = {
  trainers: trener[];
};

const initialState: initialStateType = {
  trainers: [],
};

const trainerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrainers: (state, action) => {
      state.trainers = action.payload;
    },
  },
});
export default trainerSlice.reducer;
export const { setTrainers } = trainerSlice.actions;
