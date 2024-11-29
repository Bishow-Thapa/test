import axiosInstance from "./axiosInstance";
import { store } from "@shared/store/store";
import { updateRefreshToken } from "@features/auth/services/authSlice";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }, api, extraOptions) => {
    try {
      const result = await axiosInstance.test({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      // const err = axiosError.response?.data || axiosError.message;
      // return { error: { status: axiosError.response?.status, data: err } };
      if (axiosError.response?.status === 401) {
        const refreshToken = store.getState().auth.refresh;

        const refreshResult = await axiosInstance.loginTest({
          url: baseUrl + "/auth/refresh", // Adjust to your refresh token endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: { refreshToken },
        });

        if (refreshResult?.data) {
          // Dispatch tokenReceived action with the new token
          // api.dispatch(tokenReceived(refreshResult.data)); // Ensure correct token structure

          console.log("refreshResult?.data: ", refreshResult?.data);
          api.dispatch(updateRefreshToken(refreshResult.data)); // Assuming `refresh` is part of the response

          // // Retry the original request with the new token
          // const retryResult = await axiosInstance({
          //   url: baseUrl + url,
          //   method,
          //   data,
          //   params,
          //   headers: {
          //     Authorization: `Bearer ${refreshResult.data.token}`, // Adjust token header if needed
          //   },
          // });

          return { data: refreshResult.data };
        } else {
          // If the refresh fails, dispatch loggedOut action
          // api.dispatch(loggedOut());
          // return {
          //   error: {
          //     status: 401,
          //     data: "Unable to refresh token. Logged out.",
          //   },
          // };
          console.log("Unable to refresh token. Logged out.");
        }
      }
      // Return error if it's not a 401
    }
  };

export default axiosBaseQuery;
