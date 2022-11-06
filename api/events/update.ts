import { axiosInstance } from "../axios";

export const updateEvent = async (values: any) => {
  try {
    const res = await axiosInstance.put(`/events/${values.id}/`, values, {
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
