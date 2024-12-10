import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@shared/services/axios/axiosBaseQuery";
import { CONFIG } from "@shared/utils/config";

export const balanceApi = createApi({
  reducerPath: "balanceApi",
  baseQuery: axiosBaseQuery({
    baseUrl: CONFIG.BASE_URL,
  }),
  endpoints: (builder) => ({
    getBalance: builder.query({
      query: () => ({ url: "balance", method: "get" }),
    }),
  }),
});

export const { useGetBalanceQuery } = balanceApi;
