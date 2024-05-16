import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import searchReducer from "./slices/searchSlice";
import jobReducer from "./slices/jobSlice";
const store = configureStore({
  reducer: {
    profile: profileReducer,
    search: searchReducer,
    job: jobReducer,
  },
});

export default store;
