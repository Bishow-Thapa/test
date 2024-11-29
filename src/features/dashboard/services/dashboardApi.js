import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@shared/services/axios/axiosBaseQuery";
import { CONFIG } from "@shared/utils/config";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      // query: () => "/posts",
      query: () => ({ url: "/posts", method: "get" }),
    }),
  }),
});

export const meApi = createApi({
  reducerPath: "meApi",
  baseQuery: axiosBaseQuery({
    baseUrl: CONFIG.LOGIN_URL,
  }),
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "get",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
export const { useGetMeQuery } = meApi;
