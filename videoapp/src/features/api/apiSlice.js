import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // Redux store এ name
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      keepUnusedDataFor: 600,
      providesTags: ["Videos"],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
    }),
    // ?title_like=css&title_like=react&id_ne=1&_limit=4
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const likes = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${likes.join("&")}&id_ne=${id}&_limit=4`;
        return queryString;
      },
    }),
    addVideo: builder.mutation({
      query: (newVideo) => ({
        url: "/videos",
        method: "POST",
        body: newVideo,
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useAddVideoMutation,
} = apiSlice;
