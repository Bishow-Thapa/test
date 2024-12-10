import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@shared/services/axios/axiosBaseQuery";
import { CONFIG } from "@shared/utils/config";

export const spendingApi = createApi({
  reducerPath: "spendingApi",
  baseQuery: axiosBaseQuery({
    baseUrl: CONFIG.BASE_URL,
  }),
  endpoints: (builder) => ({
    getSpending: builder.query({
      query: () => ({ url: "spending", method: "get" }),
    }),
  }),
});

export const { useGetSpending } = spendingApi;
