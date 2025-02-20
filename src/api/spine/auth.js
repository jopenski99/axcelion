import {api} from "boot/axios";

export default {
    async login() {
        return await api.post("/token/", {
            username: 'guest',
            password: process.env.KEY_CODE.replace(/"/g, "")
        }).then(response => {
            console.log("auth response: ", response)
            localStorage.setItem('token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)
            api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            return response
        }).catch(error => {
            console.log("auth error: ", error)
            return error
        });

    }
}