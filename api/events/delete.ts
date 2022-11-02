import { axiosInstance } from "../axios";

export const deleteEvent = async (id: any) => {
  try {
    const res = await axiosInstance.delete(`/events/${id}/`, {
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
