import useSWR, { mutate } from "swr";
import { tiktokApi } from "../../api/endpoint";
export function useGetAlbumVideo() {
  const { data, error } = useSWR(`album-tiktok-video`, tiktokApi.get);
  return {
    videos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
