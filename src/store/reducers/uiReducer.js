import { createSlice } from "@reduxjs/toolkit";
import { getStarupData } from "../actions/uiActions";

const initialState = {
  starupDataLoading: false,
  starupData: {},
  mode: "light",
};
const UiSlice = createSlice({
  name: "modelManip",
  initialState,
  reducers: {
    setUiMode: (state, action) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStarupData.pending, (state) => {
      state.starupDataLoading = true;
      // boom here
    });
    builder.addCase(getStarupData.fulfilled, (state, action) => {
      // boom here
      state.starupData = action.payload;
    });
    builder.addCase(getStarupData.rejected, (state, action) => {
      // boom here
    });
  },
});

export const { setUiMode } = UiSlice.actions;
export default UiSlice.reducer;
