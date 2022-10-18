import { axiosInstance } from "../axios";

export const createBankAccount = async (id: number, values: any) => {
  try {
    const res = await axiosInstance.post(
      `/bankaccounts/`,
      { ...values, account: 1 },
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
