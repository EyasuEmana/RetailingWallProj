import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";

export const getStarupData = createAsyncThunk(
  "modelManip/getModelData",
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

export const getRightFormData = createAsyncThunk(
  "modelManip/getModelRightData",
  async (model, thunkAPI) => {
    const { dim, soil_data, materials } = model;
    const reqModel = { dim, soil_data, materials };
    try {
      const params = { model: JSON.stringify(reqModel) };
      const queryString = new URLSearchParams(params).toString();
      var res;
      await axios
        .get(`${BASE_URL}/?${queryString}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          res = { modelRight: response.data, newModel: model };
        });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);
