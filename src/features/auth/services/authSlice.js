import { createSlice } from "@reduxjs/toolkit";
import logger from "@shared/utils/logger";

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
      const payloadAccessToken = action?.payload?.accessToken;
      const payloadRefreshToken = action?.payload?.refreshToken;

      logger.info({
        msg: "xxx updateRefreshToken action: ",
        payloadAccessToken,
      });
      logger.info({
        msg: "xxx updateACESSToken action: ",
        payloadRefreshToken,
      });

      state.refresh = action.payload.refreshToken;
      state.token = action.payload.refreshToken;
    },
  },
});

export const { setAuth, logout, updateRefreshToken } = authSlice.actions;
export default authSlice.reducer;
