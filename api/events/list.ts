import { axiosInstance } from "../axios";

export const getAllEvents = async (
  size: number,
  page: number
  // expand: string[]
) => {
  try {
    const res = await axiosInstance.get(`/events?size=${size}&&page=${page}`, {
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
