import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "@/features/job/jobSlice";
import createJobReducer from "@/features/createJob/createJobSlice";
import updateJobReducer from "@/features/updateJob/updateJobSlice";
import deleteJobReducer from "@/features/deleteJob/deleteJobSlice";
import filterReducer from "@/features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
    create: createJobReducer,
    update: updateJobReducer,
    delete: deleteJobReducer,
    filter: filterReducer,
  },
  devTools: true, // ✅ Enables Redux DevTools
});
