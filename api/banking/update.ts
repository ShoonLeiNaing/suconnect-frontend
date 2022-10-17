import { axiosInstance } from "../axios";
import { encodeString } from "../../utils/common/encodeString";

export const updateBankAccount = async (id: number, values: any) => {
    const encoded = encodeString("['bankaccount-details']");

  try {
    const res = await axiosInstance.put(`/bankaccounts/${id}?expand=${encoded}`, 
    { ...values, account: 1,},
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
