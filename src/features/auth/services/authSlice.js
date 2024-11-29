import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // user: null,
    token: null,
    refresh: null,
    role: null,
    scope: null,
    isAuthenticated: false,
  },
  reducers: {
    setAuth: (state, action) => {
      // console.log("state: ", state);
      // console.log("action: ", action);
      // state.user = action.payload.user;
      state.token = action.payload.token;
      state.refresh = action.payload.refresh;
      state.role = action.payload.role;
      state.scope = action.payload.scope;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      // state.user = null;
      state.token = null;
      state.refresh = null;
      state.role = null;
      state.scope = null;
      state.isAuthenticated = false;
    },
    updateRefreshToken: (state, action) => {
      console.log(
        "xxx updateRefreshToken action: ",
        action.payload.accessToken
      );
      console.log("xxx updateACESSToken action: ", action.payload.refreshToken);

      state.refresh = action.payload.refreshToken;
      state.token = action.payload.refreshToken;
    },
  },
});

export const { setAuth, logout, updateRefreshToken } = authSlice.actions;
export default authSlice.reducer;
