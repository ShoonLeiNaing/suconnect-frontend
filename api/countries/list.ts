import { axiosInstance } from "../axios";

export const getAllCountries = async () => {
  try {
    const res = await axiosInstance.get(`/countries`, {
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
