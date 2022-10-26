import { axiosInstance } from "../axios";

export const createCourse = async (values: any) => {
  try {
    const res = await axiosInstance.post(`/courses/`, values, {
      headers: {
        Accept: "application/json",
      },
    });
    return res;
  } catch (error: any) {
    console.log({ error });
    return error;
  }
};
