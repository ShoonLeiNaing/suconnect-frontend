import { axiosInstance } from "../axios";

export const filterEvents = async (params: any) => {
  try {
    const res = await axiosInstance.post(
      `/events/search/?size=-1`,
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
