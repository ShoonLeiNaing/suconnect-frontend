import { encodeString } from "../../utils/common/encodeString";
import { axiosInstance } from "../axios";

export const getAddressesOfUser = async (id: number) => {
  const encoded = encodeString('["address_set"]');
  try {
    const res = await axiosInstance.get(`/accounts/${id}?expand=${encoded}`, {
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
