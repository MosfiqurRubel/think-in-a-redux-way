import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "@/features/blogs/blogsSlice";
import blogReducer from "@/features/blog/blogSlice";
import relatedPostsReducer from "@/features/relatedPosts/relatedPostsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedPosts: relatedPostsReducer,
  },
  devTools: true, // ✅ Enables Redux DevTools
});
