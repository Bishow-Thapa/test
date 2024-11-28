import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // console.log("token: xxx: ", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
