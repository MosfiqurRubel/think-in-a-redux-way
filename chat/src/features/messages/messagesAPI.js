import { apiSlice } from "@/features/api/apiSlice";

export const messagesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) =>
        `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${
          import.meta.env.VITE_API_MESSAGES_PER_PAGE
        }`,
    }),
  }),
});

export const { useGetMessagesQuery } = messagesAPI;
