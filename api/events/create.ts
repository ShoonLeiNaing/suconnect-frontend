import { axiosInstance } from "../axios";

export const createEvent = async (values: any) => {
  try {
    const res = await axiosInstance.post(`/events/`, values, {
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
