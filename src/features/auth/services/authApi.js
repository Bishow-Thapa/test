import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CONFIG } from "@shared/utils/config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://bk-id2.info.com.np/connect/token",
    // baseUrl: "https://cqnovalid.info.com.np/connect/token",
    baseUrl: CONFIG.LOGIN_URL,
    // prepareHeaders: (headers) => {
    //   // Set the Content-Type header to x-www-form-urlencoded by default
    //   headers.set("Content-Type", "application/x-www-form-urlencoded");
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        // url: "",
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
