import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUserProfile = createAsyncThunk("profile/fetchUserProfile", async (_, { getState }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU3MTUyMDIsImV4cCI6MTcxNjkyNDgwMn0.56D-3ZtDcAOznLJyQzEuje7TpZFFoBnhzR_uGs3MM2M"
  const profileResponse = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const profileData = await profileResponse.json()
  if (!profileResponse.ok) throw new Error("Failed to fetch profile")

  const experiencesResponse = await fetch(
    `https://striveschool-api.herokuapp.com/api/profile/6641c01e167e530015fa6977/experiences`, //${profileData._id}
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const experiencesData = await experiencesResponse.json()
  if (!experiencesResponse.ok) throw new Error("Failed to fetch experiences")

  return { profile: profileData, experiences: experiencesData }
})

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: null,
    experiences: [],
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
        state.profileData = action.payload.profile
        state.experiences = action.payload.experiences
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default profileSlice.reducer
