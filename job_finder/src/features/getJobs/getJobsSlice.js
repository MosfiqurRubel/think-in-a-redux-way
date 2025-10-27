import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./getJobsAPI";
import initialState from "@/features/initialState";

// ✅ Async thunk for fetching all jobs
export const fetchJobs = createAsyncThunk("getJobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

// create slice
const getJobsSlice = createSlice({
  name: "getJobs",
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

export default getJobsSlice.reducer;
