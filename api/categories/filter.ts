import { axiosInstance } from "../axios";

export const filterCategories = async (params: any) => {
  try {
    const res = await axiosInstance.post(`/categories/search`, {
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
