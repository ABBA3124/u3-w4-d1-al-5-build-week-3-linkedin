import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "./slices/profileSlice"
import searchReducer from "./slices/searchSlice"
const store = configureStore({
  reducer: {
    profile: profileReducer,
    search: searchReducer,
  },
})

export default store
