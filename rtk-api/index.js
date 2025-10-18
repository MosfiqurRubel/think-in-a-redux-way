const store = require("./app/store");
const {
  fetchVideo,
  fetchRelatedVideos,
} = require("./features/video/thunk/thunk");

async function loadData() {
  // 1️⃣ Fetch a single video
  const result = await store.dispatch(fetchVideo());
  const video = result.payload;

  console.log("\n🎬 Single Video Fetched:");
  console.log(video);

  // 2️⃣ Fetch related videos by tags
  if (video.tags && video.tags.length > 0) {
    await store.dispatch(fetchRelatedVideos(video.tags));
  }
}

loadData();
