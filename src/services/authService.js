import axios from "axios";

const authClient = axios.create({
    baseURL: import.meta.env.VITE_AUTH_BASE_URL,
});

export const login = async (username, password) => {

    const response = await authClient.post(

        "/token/",

        new URLSearchParams({

            grant_type: "password",
            username,
            password,
            client_id: import.meta.env.VITE_CLIENT_ID,
            client_secret: import.meta.env.VITE_CLIENT_SECRET,

        }),

        {

            headers: {

                "Content-Type": "application/x-www-form-urlencoded",

            },

        }

    );

    return response.data;

};

export const logout = () => {
    localStorage.removeItem("access_token");
};

export const isLoggedIn = () => {
    return !!localStorage.getItem("access_token");
};