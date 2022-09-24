import { axiosInstance } from "../axios";

export const getAllEvents = async (
  size: number,
  page: number
  // expand: string[]
) => {
  try {
    const res = await axiosInstance.get(
      `/events?size=${size}&&page=${page}&&expand=["course"]`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("ejej", res.data);
    return res?.data;
  } catch (error: any) {
    console.log({ error });
    return error;
  }
};
