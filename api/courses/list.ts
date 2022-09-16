import { axiosInstance } from "../axios";

export const getAllCourses = async (size: number, page: number) => {
  try {
    const res = await axiosInstance.get(`/courses?size=${size}&&page=${page}`, {
      headers: {
        Accept: "application/json",
      },
    });

    return res?.data;
  } catch (error: any) {
    console.log({ error });
    return error;
  }
};
