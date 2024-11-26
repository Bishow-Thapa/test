import axiosInstance from "../axios/axiosInstance";

// BASE
export const deleteData = async (endpoint, cancelToken) => {
  const response = await axiosInstance.base.delete(endpoint, {
    cancelToken,
  });
  return response.data;
};
