import { axiosInstance } from "../axios";

export const updateBankAccount = async (id: number, values: any) => {
  try {
    const res = await axiosInstance.put(`/bankaccounts/${id}`,  values,
    {
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