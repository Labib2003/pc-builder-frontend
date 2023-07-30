import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-builder-backend-two.vercel.app/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getComponent: builder.query({
      query: ({ id }) => {
        console.log(id);
        return `/features/${id}`;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetComponentQuery } = api;
