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
  extraReducers: (builder) => {
    builder
      .addCase(updateJobThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateJobThunk.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.jobs.findIndex(
          (t) => t.id === action.payload.id
        );

        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJobThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default updateJobSlice.reducer;
