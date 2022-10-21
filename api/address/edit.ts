import { axiosInstance } from "../axios";

export const editAddress = async (id: number, values: any) => {
  try {
    const res = await axiosInstance.put(`/addresses/${id}`, values, {
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
