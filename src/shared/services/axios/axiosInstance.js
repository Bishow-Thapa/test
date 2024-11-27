import axios from "axios";
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

export default axiosInstance;
