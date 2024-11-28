import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@shared/services/axios/axiosBaseQuery";

export const postsApi = createApi({
  reducerPath: "postsApi",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://jsonplaceholder.typicode.com",
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState().auth.token;
  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  //     }

  //     return headers;
  //   },
  // }),
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

export const { useGetPostsQuery } = postsApi;
