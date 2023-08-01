import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";

const model = {
  dim: {
    base: {
      thickness: 1.5,
      toe_length: 3,
      total_length: 8,
    },
    shear_key: {
      height: 1,
      length: 2,
      toe_distance: 3,
    },
    stem: {
      bottom: 2,
      height: 12,
      top: 1,
    },
  },
  elev: {
    left_soil: 3,
    right_soil: 6,
    water: 2,
  },
  info: {
    format: "NOT JSON, this is a: <class 'str'>",
    timestamp: "31 July 2023 11:32:36",
  },
  materials: {
    fc: 4000,
  },
  soil_data: {
    active: 43,
    eq: 85,
    left_el: 2,
    passive: 500,
    right_el: 8,
  },
};
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
      return model;
      // return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);

export const getRightFormData = createAsyncThunk(
  "modelManip/getModelRightData",
  async (model, thunkAPI) => {
    const { dim, elev, soil_data, materials } = model;
    const reqModel = { dim, elev, soil_data, materials };
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
          res = response.data;
        });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.status);
    }
  }
);

// var obj={
//     'dim': {
//         'stem': {
//             'height': 12,
//             'top': 1,
//             'bottom': 2,
//         },
//         'base': {
//             'total_length': 8,
//             'toe_length': 3,
//             'thickness': 1.5
//         },
//         'shear_key': {
//             'length': 2,
//             'toe_distance': 3,
//             'height': 1
//         },
//     },
//     'elev': {
//         'water': 2,
//         'right_soil': 6,
//         'left_soil': 3
//     },
//     'soil_data': {
//         'active': 43,
//         'passive': 500,
//         'eq': 85,
//         'right_el': 8,
//         'left_el': 2
//     },
//     'materials': {
//         'fc': 4000,
//     }
// }
