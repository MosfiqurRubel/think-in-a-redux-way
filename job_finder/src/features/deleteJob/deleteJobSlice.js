import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJob } from "./deleteJobAPI";
import initialState from "@/features/initialState";

// ✅ Async thunk for delete job
export const removeJobThunk = createAsyncThunk(
  "deleteJob/removeJobThunk",
  async (id) => {
    const job = await deleteJob(id);
    return job;
  }
);

// create slice
const deleteJobSlice = createSlice({
  name: "deleteJob",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(removeJobThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJobThunk.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = state.jobs.filter((j) => j.id !== action.meta.arg);
      })
      .addCase(removeJobThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default deleteJobSlice.reducer;
