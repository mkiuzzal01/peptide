import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  email: string;
  time_zone: string;
  role: string;
  name: string;
  avatar?: string;
}

interface IInitState {
  user: IUser | null;
  token: string | null;
}

const initialState: IInitState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
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

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
