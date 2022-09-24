import { axiosInstance } from "../axios";

export const getAllClassifications = async (size: number, page: number) => {
  try {
    const res = await axiosInstance.get(
      `/venue-classifications?size=${size}&&page=${page}`,
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

// export const getAllCourses = async (size: number, page: number) => {
//   const data = await axios({
//     method: "get",
//     url: `https://api-dev.teachersucenter.com/api/v2/courses?size=${size}&&page=${page}`,
//   })
//     .then((apiResponse) => {
//       console.log(apiResponse);
//       return apiResponse;
//     })
//     .catch((error) => {
//       console.log({ error });
//     });

//   return data?.data;
// };
