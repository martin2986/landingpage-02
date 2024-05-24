import axios from "axios";

export const appApi = axios.create({
  baseURL: `${process.env.API}`,
  withCredentials: true,
});
