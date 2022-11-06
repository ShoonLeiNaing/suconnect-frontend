/* eslint-disable camelcase, no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface Course {
  id: string;
  name: string;
  description?: string;
  code: string;
  start_date: string;
  end_date: string;
  monthly_fee: number;
  color: string;
  category: number;
}

const initialState: Course = {
  id: "",
  name: "",
  description: "",
  code: "",
  start_date: "",
  end_date: "",
  monthly_fee: 0,
  color: "",
  category: 0,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    storeCourse: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.code = action.payload.code;
      state.start_date = action.payload.end_date;
      state.end_date = action.payload.end_date;
      state.monthly_fee = action.payload.monthly_fee;
      state.color = action.payload.color;
      state.category = action.payload.category;
    },
  },
});

export const { storeCourse } = courseSlice.actions;

export const selectCourse = (state: AppState) => state.course;

export default courseSlice.reducer;
