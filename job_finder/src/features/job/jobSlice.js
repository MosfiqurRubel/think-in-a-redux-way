import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./jobAPI";
import initialState from "@/features/initialState";

// ✅ Async thunk for fetching all jobs
export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

// create slice
const jobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = [];
      });
  },
});

export default jobSlice.reducer;
