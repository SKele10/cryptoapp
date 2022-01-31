import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const crytoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "5d3d2d1a2dmsh2b8d692f3b32ec7p153912jsn8d166d6ed79b",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: crytoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchanges`)
    })
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
