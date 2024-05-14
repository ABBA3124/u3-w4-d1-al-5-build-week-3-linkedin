import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProfiles = createAsyncThunk("search/fetchProfiles", async (searchQuery, { getState }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzMzgyNzNmZjRhNTAwMTU1ZjQxZWYiLCJpYXQiOjE3MTU2ODEzMTksImV4cCI6MTcxNjg5MDkxOX0.EWeKg_oSSX47wgzaf31RJYUHRUU-QbamiJAq0DkAnMA"
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile?search=${searchQuery}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error("la fetch non risponde, potrebbe essere errata.")
  }
  const profiles = await response.json()
  // Filtra i risultati in base alla query di ricerca
  return profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.surname.toLowerCase().includes(searchQuery.toLowerCase())
  )
})

const searchSlice = createSlice({
  name: "search",
  initialState: {
    profiles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.profiles = action.payload
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default searchSlice.reducer
