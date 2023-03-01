import axiosClient from "../axiosClient";
const url = "/banner";
export const bannerApi = {
  get: async () => {
    return await axiosClient.get(url);
  },
};
