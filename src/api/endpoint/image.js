import axiosClient from "../axiosClient"
export const imageApi  = {
    get: async () => {
        const url = "/image"
        return await axiosClient.get(url)
    }
}