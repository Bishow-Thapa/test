import axiosInstance from "../axios/axiosInstance";

// Base
export const createData = async (endpoint, data, cancelToken) => {
  const response = await axiosInstance.base.post(endpoint, data, {
    cancelToken,
  });
  return response.data;
};
