/* eslint-disable camelcase */

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

interface CourseInterface {
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

const initialState: CourseInterface = {
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
    createCourse: (state, action) => {
      console.log(state);
    },
  },
});

export const { createCourse } = courseSlice.actions;

export const selectCourse = (state: AppState) => state.course;

export default courseSlice.reducer;
