import axiosClient from "../axiosClient"
export const tiktokApi  = {
    get: async () => {
        const url = "/tiktok"
        return await axiosClient.get(url)
    }
}