import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs, updateBlog } from "./blogsAPI";

const initialState = {
  blogs: [],
  sortBy: "default", // "newest" | "mostliked"
  filterBy: "all", // "all" | "saved"
  isLoading: false,
  isError: false,
  error: null,
};

// ✅ 1. Async thunk for fetching all blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

// ✅ 2. Update blog like or save status
export const updateBlogData = createAsyncThunk(
  "blogs/updateBlogData",
  async ({ id, data }) => {
    const updated = await updateBlog({ id, data });
    return updated;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // ✅ Sort change
    sortChanged: (state, action) => {
      state.sortBy = action.payload;
    },
    // ✅ Filter change
    filterChanged: (state, action) => {
      state.filterBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      })

      // ✅ Optimistic update
      .addCase(updateBlogData.pending, (state, action) => {
        const { arg } = action.meta;
        const { id, data } = arg;
        const existing = state.blogs.find((b) => b.id === id);
        if (existing) {
          Object.assign(existing, data); // 🔹 Temporarily update immediately
        }
      })

      // ✅ Update blog (like/save)
      .addCase(updateBlogData.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.blogs.findIndex((b) => b.id === updated.id);
        if (index !== -1) {
          state.blogs[index] = updated;
        }
      });
  },
});

export default blogsSlice.reducer;
export const { sortChanged, filterChanged } = blogsSlice.actions;
