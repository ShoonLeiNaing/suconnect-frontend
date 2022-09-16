import { axiosInstance } from "../axios";

export const filterGroups = async (size: number, page: number, params: any) => {
  try {
    const res = await axiosInstance.post(
      `/groups/search/?size=${size}&&page=${page}`,
      {
        filter_params: params,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return res?.data;
  } catch (error: any) {
    console.log({ error });
    return error;
  }
};
