import { api } from "boot/axios";

export default {
    async getSiteSettings() {
        return await api.get("/site-settings/1").then(response => {
            return response.data
        }).catch(error => {
            console.log("auth error: ", error)
            return error
        });
    }
}