import axiosClient from "../axiosClient";
const url = "/product";
export const productApi = {
  get: async () => {
    const res = await axiosClient.get(url);
    return res.data;
  },
};
