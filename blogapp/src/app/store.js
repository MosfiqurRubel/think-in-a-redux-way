import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "@/features/blogs/blogsSlice";
import blogReducer from "@/features/blog/blogSlice";
import relatedPostsReducer from "@/features/relatedPosts/relatedPostsSlice";
import filtersReducer from "@/features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedPosts: relatedPostsReducer,
    filters: filtersReducer,
  },
  devTools: true, // ✅ Enables Redux DevTools
});
