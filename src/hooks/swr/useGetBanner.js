import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
import {bannerApi} from "../../api/endpoint"
export function useGetBanner() {
  const { data, error } = useSWR(`banner`, bannerApi.get);

  return {
    banners: data,
    isLoading: !error && !data,
    isError: error,
  };
}
