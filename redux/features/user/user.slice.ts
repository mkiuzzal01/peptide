import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  userId: string;
  email: string;
  role: string;
  name: string;
  avatar: string;
}

interface IInitState {
  user: IUser | null;
  token: string | null;
}

const initialState: IInitState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
