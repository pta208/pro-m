import axiosClient from "../axiosClient"

export const productApi = {
    get: async () => {
        const url="/product"
        return await axiosClient.get(url)
    }
}