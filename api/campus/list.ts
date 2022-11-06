import { axiosInstance } from "../axios";

export const getAllCampuses = async () => {
  try {
    const res = await axiosInstance.get(`/campuses?size=-1`, {
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
