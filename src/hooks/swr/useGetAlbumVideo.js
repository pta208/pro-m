import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
const fetcher = async () => {
  const resp = await axiosClient.get(`/tiktok`);
  return resp;
};
export function useGetAlbumVideo() {
  const { data, error } = useSWR(`album-tiktok-video`, fetcher);
  return {
    videos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
