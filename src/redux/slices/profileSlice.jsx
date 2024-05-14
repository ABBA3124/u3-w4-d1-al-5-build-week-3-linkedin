import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUserProfile = createAsyncThunk("profile/fetchUserProfile", async (_, { getState }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M"
  const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  return data
})

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.profileData = action.payload
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default profileSlice.reducer
