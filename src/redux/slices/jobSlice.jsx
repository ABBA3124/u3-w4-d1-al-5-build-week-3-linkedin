import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchJobs = createAsyncThunk("job/fetchJobs", async (query) => {
  const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`)
  if (!response.ok) {
    throw new Error("errore")
  }
  const queryJob = await response.json()
  console.log(queryJob)
  return queryJob
})

const jobSlice = createSlice({
  name: "job",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default jobSlice.reducer
