import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-dev.teachersucenter.com/api/v2",
});
