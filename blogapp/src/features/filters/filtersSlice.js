import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "", // default | newest | mostliked
  filterBy: "all", // all | saved
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sorted: (state, action) => {
      state.sortBy = action.payload;
    },
    filtered: (state, action) => {
      state.filterBy = action.payload;
    },
  },
});

export const { sorted, filtered } = filtersSlice.actions;
export default filtersSlice.reducer;
