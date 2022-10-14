import { axiosInstance } from "../axios";

export const createAddress = async (id: number, values: any) => {
  try {
    const res = await axiosInstance.post(
      `/addresses/`,
      { ...values, account: 1, block_number: "2" },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return res;
  } catch (error: any) {
    console.log({ error });
    return error;
  }
};
