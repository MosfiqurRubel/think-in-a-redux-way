import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.REACT_APP_API_URL,
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

// code splitting
// ⚡ Vite = import.meta.env.VITE_API_URL
// ⚡ Create React App = process.env.REACT_APP_API_URL
