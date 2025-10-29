import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "all", // all | internship | remote | full-time
  search: "",
  sort: "", // asc | desc | none
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setType, setSearch, setSort } = filterSlice.actions;
