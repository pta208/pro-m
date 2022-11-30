import axiosClient from "../axiosClient"
export const bannerApi  = {
    get: async () => {
        const url = "/banner"
        return await axiosClient.get(url)
    }
}