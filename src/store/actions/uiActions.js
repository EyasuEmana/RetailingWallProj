import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";
export const getStarupData = createAsyncThunk(
  "modelManip/getStarupData",
  async (formData, thunkAPI) => {
    try {
      var res;
      await axios
        .get(`${BASE_URL}/?get_sample_model=model`, {
          headers: {
            "Content-Type": "application/json", 
          },
          params: {
            get_sample_model: "model",
          },
        })
        .then((response) => {
          res = response.data;
        });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);
