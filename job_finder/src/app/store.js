import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "@/features/getJobs/getJobsSlice";
import createJobReducer from "@/features/createJob/createJobSlice";
import updateJobReducer from "@/features/updateJob/updateJobSlice";
import deleteJobReducer from "@/features/deleteJob/deleteJobSlice";
import filterReducer from "@/features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    job: jobsReducer,
    create: createJobReducer,
    update: updateJobReducer,
    delete: deleteJobReducer,
    filter: filterReducer,
  },
  devTools: true, // ✅ Enables Redux DevTools
});
