import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { PlayerUser, User } from "../../types"; // Add missing import statement for User type
import exp from "constants";

// Define a type for the slice state
type player = {
  playerKolo: {
    poeni: number;
    kolo: {
      id: number;
      tip: string;
    };
    asistencije: number;
    skokovi: number;
    ukradeneLopte: number;
    blokovi: number;
    ukupno: number;
  }[];
  id: number;
  ime: string;
  slika: string;
  nadimak: string;
  cena: number;
};

export type playerIndex = {
  player: player;
  index: number;
};

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
    editTrener: (state, action: PayloadAction<any>) => {
      state.user!.trenerId = action.payload.trenerId;
      state.user!.trener = action.payload.trener;
    },
    editNaTerenu: (state, action: PayloadAction<any>) => {
      state.user!.PlayerUser = action.payload;
    },
    setCredits: (state, action: PayloadAction<number>) => {
      state.user!.credits = action.payload;
    },
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

export const {
  logInStart,
  logInFailure,
  logInSuccess,
  logout,
  setCredits,
  editNaTerenu,
  editTrener,
} = authSlice.actions;
export default authSlice.reducer;
