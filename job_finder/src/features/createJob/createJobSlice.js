import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob } from "./createJobAPI";
import initialState from "@/features/initialState";

// ✅ Async thunk for create job
export const createJobThunk = createAsyncThunk(
  "createJob/createJobThunk",
  async (data) => {
    const job = await addJob(data);
    return job;
  }
);

// create slice
const createJobSlice = createSlice({
  name: "createJob",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createJobThunk.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJobThunk.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        // state.jobs.push(action.payload);
        state.jobs = [...state.jobs, action.payload];
      })
      .addCase(createJobThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default createJobSlice.reducer;
