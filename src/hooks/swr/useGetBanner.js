import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
const fetcher = async () => {
  const resp = await axiosClient.get(`/banner`);
  return resp;
};
export function useGetBanner() {
  const { data, error } = useSWR(`banner`, fetcher);

  return {
    banners: data,
    isLoading: !error && !data,
    isError: error,
  };
}
