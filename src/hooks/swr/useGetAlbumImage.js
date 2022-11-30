import useSWR, { mutate } from "swr";
import { imageApi } from "../../api/endpoint";
export function useGetAlbumImage() {
  const { data, error } = useSWR(`album-image`, imageApi.get);

  return {
    images: data,
    isLoading: !error && !data,
    isError: error,
  };
}
