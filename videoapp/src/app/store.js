import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
// import videosReducer from "@/features/videos/videosSlice";
// import videoReducer from "@/features/video/videoSlice";
// import tagsReducer from "@/features/tags/tagsSlice";
// import relatedVideosReducer from "@/features/relatedVideos/relatedVideosSlice";
// import filterReducer from "@/features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(apiSlice.middleware),
    // videos: videosReducer,
    // tags: tagsReducer,
    // video: videoReducer,
    // relatedVideos: relatedVideosReducer,
    // filter: filterReducer,
  },
  devTools: true, // ✅ Enables Redux DevTools
});
