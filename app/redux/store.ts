import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { log } from "console";
import { useSearchParams } from "next/navigation";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import loadingSlice from "./slices/loadingSlice";
import { use } from "react";
import playerSlice from "./slices/playerSlice";
import trenerSlice from "./slices/trenerSlice";
import lockedSlice from "./slices/lockedSlice";
export const createStore = () =>
  configureStore({
    reducer: {
      // Add the generated reducer here
      authSlice,
      loadingSlice,
      playerSlice,
      trenerSlice,
      lockedSlice,
    },
  });

export type storeType = ReturnType<typeof createStore>;
export type AppDispatch = storeType["dispatch"];
export type RootState = ReturnType<storeType["getState"]>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
