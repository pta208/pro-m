import useSWR, { mutate } from "swr";
import { imageApi } from "../../api/endpoint";
import { images } from "../../const";
export function useGetAlbumImage() {
  const { data, error } = useSWR(`album-image`, () => images);

  return {
    images: data,
    isLoading: !error && !data,
    isError: error,
  };
}
