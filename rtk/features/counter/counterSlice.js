const createSlice = require("@reduxjs/toolkit");

// initial state
const inititalState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  inititalState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

modules.exports = counterSlice.reducer;
modules.exports.counterActions = counterSlice.actions;
