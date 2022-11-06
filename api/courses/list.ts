import { encodeString } from "../../utils/common/encodeString";
import { axiosInstance } from "../axios";

export const getAllCourses = async (size: number, page: number) => {
  const encoded = encodeString('["category"]');

  try {
    const res = await axiosInstance.get(
      `/courses?size=${size}&&page=${page}&&expand=${encoded}`,
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
