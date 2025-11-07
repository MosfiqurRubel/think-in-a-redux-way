import { apiSlice } from "@/features/api/apiSlice";

export const conversationsAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) =>
        `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${
          import.meta.env.VITE_API_CONVERSATIONS_PER_PAGE
        }`,
    }),
  }),
});

export const { useGetConversationsQuery } = conversationsAPI;
