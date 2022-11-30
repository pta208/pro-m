import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
import {banners} from "../../const"
export function useGetBanner() {
  const { data, error } = useSWR(`banner`, ()=> banners);

  return {
    banners: data,
    isLoading: !error && !data,
    isError: error,
  };
}
