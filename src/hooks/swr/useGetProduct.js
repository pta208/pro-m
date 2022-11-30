
import useSWR, { mutate } from "swr";
import {productApi} from "../../api/endpoint"
export function useGetProduct() {
  const { data, error } = useSWR(`product`, productApi.get);
  if (error) {
    console.log(error);
  }
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
