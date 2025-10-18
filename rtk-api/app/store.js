const { configureStore } = require("@reduxjs/toolkit");
const videoReducer = require("../features/video/videoSlice");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: videoReducer,

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
