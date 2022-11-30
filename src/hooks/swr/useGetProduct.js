
import useSWR, { mutate } from "swr";
import {productApi} from "../../api/endpoint"
import {products} from "../../const"
export function useGetProduct() {
  const { data, error } = useSWR(`product`, () => products);
  if (error) {
    console.log(error);
  }
  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
