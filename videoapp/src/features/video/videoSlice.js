import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo, updateLikeDislike } from "./videoAPI";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: null,
};

// ✅ Async thunk for fetching single video
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

// ✅ Async thunk for Like or Dislike Update
export const toggleLikeDislike = createAsyncThunk(
  "likeDislike/toggleLikeDislike",
  async ({ id, data }) => {
    const updateVideo = await updateLikeDislike({ id, data });
    return updateVideo;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      })
      // ✅ Like/Dislike update
      .addCase(toggleLikeDislike.fulfilled, (state, action) => {
        state.video = action.payload; // update local video object
      });
  },
});

export default videoSlice.reducer;
