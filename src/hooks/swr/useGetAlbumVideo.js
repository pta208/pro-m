import useSWR, { mutate } from "swr";
import {tiktok} from "../../const"
export function useGetAlbumVideo() {
  const { data, error } = useSWR(`album-tiktok-video`, ()=> tiktok);
  return {
    videos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
