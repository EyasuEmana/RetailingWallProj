import { createSlice } from "@reduxjs/toolkit";
import { getRightFormData, getStarupData } from "../actions/uiActions";
import { dispatch } from "..";

const initialState = {
  starupDataLoading: false,
  model: {},
  modelRight: {},
  mode: "light",
  height: 0,
};
const UiSlice = createSlice({
  name: "modelManip",
  initialState,
  reducers: {
    setUiMode: (state, action) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setHeight: (state, action) => {
      // state.height = state.height+5;
    },
    setModel: (state, action) => {
      state.model = action.payload;
    },
    setRightModel: (state, action) => {
      state.modelRight = action.payload;
    },
  },

  extraReducers: (builder) => {
    //left
    builder.addCase(getStarupData.pending, (state) => {
      state.starupDataLoading = true;
      // boom here
    });
    builder.addCase(getStarupData.fulfilled, (state, action) => {
      // boom here
      state.model = action.payload;
      state.starupDataLoading = false;
      // dispatch(getRightFormData());
    });
    builder.addCase(getStarupData.rejected, (state, action) => {
      state.starupDataLoading = false;

      // boom here
    });

    //right
    builder.addCase(getRightFormData.pending, (state) => {
      // boom here
    });
    builder.addCase(getRightFormData.fulfilled, (state, action) => {
      state.modelRight = action.payload;
      // boom here
    });
    builder.addCase(getRightFormData.rejected, (state, action) => {
      // boom here
    });
  },
});

export const { setUiMode, setHeight, setModel,setRightModel } = UiSlice.actions;
export default UiSlice.reducer;
