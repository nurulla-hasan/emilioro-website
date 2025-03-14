"use client";

import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainSlice"; // our main slice

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
