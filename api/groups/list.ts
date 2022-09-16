import { axiosInstance } from "../axios";

export const getAllGroups = async (size: number, page: number) => {
  try {
    const res = await axiosInstance.get(`/groups?size=${size}&&page=${page}`, {
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
