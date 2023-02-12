import { configureStore } from "@reduxjs/toolkit";
import guessGameReducer from "../guessGameSlice";

export const store = configureStore({
    reducer: {
        guessGame: guessGameReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
