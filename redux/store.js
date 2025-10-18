const { createStore, combineReducers } = require("redux");
const counterReducer = require("./counter/reducer");
const dynimicCounterReducer = require("./dynamicCounter/reducer");

const rootReducer = combineReducers({
  counter: counterReducer,
  dynimicCounter: dynimicCounterReducer,
});

const store = createStore(rootReducer);

module.exports = store;
