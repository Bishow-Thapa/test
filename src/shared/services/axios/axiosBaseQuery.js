import axiosInstance from "./axiosInstance";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosInstance.test({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError.response?.data || axiosError.message;
      return { error: { status: axiosError.response?.status, data: err } };
    }
  };

export default axiosBaseQuery;
