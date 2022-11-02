import { encodeString } from "../../utils/common/encodeString";
import { axiosInstance } from "../axios";

export const getEventsOfCourse = async (id: number) => {
  const encoded = encodeString('["event_set"]');
  try {
    const res = await axiosInstance.get(`/courses/${id}?expand=${encoded}`, {
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
