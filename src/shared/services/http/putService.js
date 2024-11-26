import axiosInstance from "../axios/axiosInstance";

// Base
export const updateData = async (endpoint, data, cancelToken) => {
  const response = await axiosInstance.base.put(endpoint, data, {
    cancelToken,
  });
  return response.data;
};
