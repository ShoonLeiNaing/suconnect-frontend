/* eslint-disable camelcase, no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface Campus {
  id: string;
  name: string;
  opening_time: string;
  closing_time: string;
  house_number?: string;
  block_number?: string;
  street_name?: string;
  township: string;
  city: string;
  country: string;
  postal_code: number;
}

const initialState: Campus = {
  id: "",
  name: "",
  opening_time: "",
  closing_time: "",
  house_number: "",
  block_number: "",
  street_name: "",
  township: "",
  city: "",
  country: "",
  postal_code: 0,
};

export const campusSlice = createSlice({
  name: "campus",
  initialState,
  reducers: {
    storeCampus: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.opening_time = action.payload.opening_time;
      state.closing_time = action.payload.closing_time;
      state.house_number = action.payload.house_number;
      state.block_number = action.payload.block_number;
      state.street_name = action.payload.street_name;
      state.township = action.payload.township;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.postal_code = action.payload.postal_code;
    },
  },
});

export const { storeCampus } = campusSlice.actions;
export default campusSlice.reducer;
