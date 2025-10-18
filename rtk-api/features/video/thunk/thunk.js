const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// 1️⃣ First thunk: fetch a single video
const fetchVideo = createAsyncThunk("video/fetchVideo", async () => {
  const res = await fetch("http://localhost:9000/videos");
  const singleVideo = await res.json();
  return singleVideo;
});

// 2️⃣ Second thunk: fetch related videos by tags
const fetchRelatedVideos = createAsyncThunk(
  "video/fetchRelatedVideos",
  async (tags) => {
    const queryString = tags.map((tag) => `tags_like=${tag}`).join("&");
    const res = await fetch(`http://localhost:9000/videos?${queryString}`);
    const relatedVideos = await res.json();

    // Sort by views (descending order)
    relatedVideos.sort((a, b) => b.views - a.views);
    return relatedVideos;
  }
);

module.exports = { fetchVideo, fetchRelatedVideos };
