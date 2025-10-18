const { createSlice } = require("@reduxjs/toolkit");
const { fetchVideo, fetchRelatedVideos } = require("./thunk/thunk");

// initial state
const initialState = {
  video: {},
  relatedVideos: [],
  loading: false,
  error: null,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    // Fetch single video
    builder.addCase(fetchVideo.pending, (state, aciton) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchVideo.fulfilled, (state, aciton) => {
      state.loading = false;
      state.error = null;
      state.video = aciton.payload;
    });

    builder.addCase(fetchVideo.rejected, (state, aciton) => {
      state.loading = false;
      state.error = aciton.error.message;
      state.video = {};
    });

    // Fetch related videos
    builder.addCase(fetchRelatedVideos.pending, (state, aciton) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchRelatedVideos.fulfilled, (state, aciton) => {
      state.loading = false;
      state.error = null;
      state.relatedVideos = aciton.payload;
      console.log("\n🎥Sorted Related videos by views: \n");
      console.log(aciton.payload.map((v) => `${v.title} ${v.views} views`));
    });

    builder.addCase(fetchRelatedVideos.rejected, (state, aciton) => {
      state.loading = false;
      state.error = aciton.error.message;
      state.relatedVideos = [];
    });
  },
});

module.exports = videoSlice.reducer;
