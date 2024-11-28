import axios from "axios";
import { store } from "@shared/store/store";
import axiosConfig from "./axiosConfig";

const axiosInstance = {
  base: axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_API_URL,
    ...axiosConfig,
  }),
  login: axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_LOGIN_API_URL,
    ...axiosConfig,
  }),
  test: axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_TEST_API_URL,
    ...axiosConfig,
  }),
};

axiosInstance.test.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
