import { axiosInstance } from "../axios";

export const getAllVenueClassifications = async () => {
  try {
    const res = await axiosInstance.get(`/venue-classifications?size=-1`, {
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
