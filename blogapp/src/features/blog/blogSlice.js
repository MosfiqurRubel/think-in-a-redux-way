import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, toggleSave, updateLike } from "./blogAPI";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: null,
};

// ✅ Async thunk for fetching single blog
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

// ✅ Async thunk for updating blog Like
export const incrementLike = createAsyncThunk(
  "blog/incrementLike",
  async ({ id, data }) => {
    const updateBlog = await updateLike({ id, data });
    return updateBlog;
  }
);

// ✅ Async thunk for toggle save
export const toggleSaveBlog = createAsyncThunk(
  "blog/toggleSave",
  async ({ id, data }) => {
    const updatedBlog = await toggleSave({ id, data });
    return updatedBlog;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      })

      // ✅ Likes update
      .addCase(incrementLike.fulfilled, (state, action) => {
        state.blog = action.payload; // update local
      })

      // ✅ Save toggle update
      .addCase(toggleSaveBlog.fulfilled, (state, action) => {
        state.blog = action.payload;
      });
  },
});

export default blogSlice.reducer;
