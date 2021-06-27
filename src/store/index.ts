import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./movies";

const store = configureStore({ reducer: { movies: moviesReducer } });

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
