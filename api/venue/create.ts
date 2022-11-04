import { axiosInstance } from "../axios";

export const createVenue = async (values: any) => {
  try {
    const res = await axiosInstance.post(`/venues/`, values, {
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
