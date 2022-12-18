import { ENV } from "../utils";

export class User {
    baseApi = ENV.BASE_API;

    async getMe(accessToken) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
            const params = {
                method: "GET",
                headers: {
                    Authorization: `Token ${accessToken}`
                },
            };
            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result; //Acá Andrés, puse un result, porque con "error" no me dejaba porque estaba indefinido, a ver si no me da error ahorita

            return result;
        } catch (error) {
            throw (error)
        }
    }

    async createUser(accessToken, data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });
            if (data.fileAvatar) {
                formData.append("avatar", data.fileAvatar);
            }

            const url = `${this.baseApi}/${ENV.API_ROUTES.CREATE_USER}`
            const params = {
                method: "POST",
                headers: {
                    Authorization: `Token ${accessToken}`
                },
                body: formData,
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw (error)
        }
    }

    async getUsers(accessToken, active = undefined) {
        try {
            const url =`${this.baseApi}/${ENV.API_ROUTES.GET_USERS}?active=${active}`;
            const params = {
                method: "GET",
                headers:{
                    Authorization:`Token ${accessToken}`
                },
            };
            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result; 

            return result;
        } catch (error) {
            throw error;
        }
    }
}

