import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editJob } from "./updateJobAPI";
import initialState from "@/features/initialState";

// ✅ Async thunk for update job
export const updateJobThunk = createAsyncThunk(
  "updateJob/updateJobThunk",
  async ({ id, data }) => {
    const job = await editJob(id, data);
    return job;
  }
);

// create slice
const updateJobSlice = createSlice({
  name: "updateJob",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInactive: (state) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateJobThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateJobThunk.fulfilled, (state) => {
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(updateJobThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default updateJobSlice.reducer;
export const { editActive, editInactive } = updateJobSlice.actions;
