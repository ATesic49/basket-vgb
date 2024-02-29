import { createSlice } from "@reduxjs/toolkit";

export type player = {
  id: number;
  ime: string;
  slika: string;
  nadimak: string;
  cena: number;
  playerKolo: {
    kolo: {
      id: number;
      tip: string;
    };
    poeni: number;
    asistencije: number;
    skokovi: number;
    ukradeneLopte: number;
    blokovi: number;
    ukupno: number;
  }[];
};
type initialStateType = {
  players: player[];
};

const initialState: initialStateType = {
  players: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
  },
});
export default playerSlice.reducer;
export const { setPlayers } = playerSlice.actions;
