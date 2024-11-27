import axiosInstance from "./axiosInstance";

axiosInstance.base.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    console.log("Token from Redux:", token);
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
