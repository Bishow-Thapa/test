import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  createTransform,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "@features/auth/services/authApi";
import { postsApi, meApi } from "@features/dashboard/services/dashboardApi";
import authReducer from "@features/auth/services/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import jwtMiddleware from "./jwtMiddleware";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [meApi.reducerPath]: meApi.reducer,
});

const persistedAuthReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedAuthReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(jwtMiddleware)
      .concat(authApi.middleware)
      .concat(postsApi.middleware)
      .concat(meApi.middleware),
});

export const persistor = persistStore(store);
