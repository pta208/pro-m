import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
const fetcher = async () => {
  const resp = await axiosClient.get(`/image`);
  return resp;
};
export function useGetAlbumImage() {
  const { data, error } = useSWR(`album-image`, fetcher);

  return {
    images: data,
    isLoading: !error && !data,
    isError: error,
  };
}
