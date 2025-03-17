"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignUpOpen: false,
  user: {
     name: "Nurulla Hasan",
     email: "nurullahasan.dev@gmail.com",
     photo: ""
  },
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setIsSignUpOpen: (state, action) => {
      state.isSignUpOpen = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setIsSignUpOpen, setUser, logout } = mainSlice.actions;
export default mainSlice.reducer;
