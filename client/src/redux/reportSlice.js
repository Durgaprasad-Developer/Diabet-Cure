import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGlucoseAIReport } from "../apicalls/glucoCalls";

export const fetchReport = createAsyncThunk("report/fetch", async () => {
  const response = await getGlucoseAIReport();
  return response?.report || "";
});

const reportSlice = createSlice({
  name: "report",
  initialState: {
    data: null,
    loading: false,
    error: null,
    lastUpdated: null,
    refreshTrigger: 0, // trigger refetch
  },
  reducers: {
    triggerRefresh: (state) => {
      state.refreshTrigger += 1;
    },
    clearReport: (state) => {
      state.data = null;
      state.lastUpdated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReport.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastUpdated = Date.now();
      })
      .addCase(fetchReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { triggerRefresh, clearReport } = reportSlice.actions;
export default reportSlice.reducer;
