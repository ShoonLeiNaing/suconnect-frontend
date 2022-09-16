import { axiosInstance } from "../axios";

export const filterCourses = async (
  size: number,
  page: number,
  params: any
) => {
  try {
    const res = await axiosInstance.post(
      `/courses/search/?size=${size}&&page=${page}`,
      {
        filter_params: params,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return res?.data;
  } catch (error: any) {
    console.log({ error });
    return error;
  }
};
