import axiosClient from "../../api/axiosClient";
import useSWR, { mutate } from "swr";
const fetcher = async () => {
  const resp = await axiosClient.get(`/product`);
  return resp;
};
export function useGetProduct() {
  const { data, error } = useSWR(`product`, fetcher);
  if (error) {
    console.log(error);
  }
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
