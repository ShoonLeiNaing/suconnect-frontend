import { axiosInstance } from "../axios";

export const createCampus = async (values: any) => {
  try {
    const res = await axiosInstance.post(`/campuses/`, values, {
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
