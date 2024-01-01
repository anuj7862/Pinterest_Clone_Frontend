
//

import axios from "axios";

export const baseUrl =  'http://localhost:3000';

export const axiosInstances = {
    service : axios.create({
        baseURL: baseUrl,
    }),
};


export const serviceProps = {
    authService : {
        loginService: {
            uri: '/auth/login',
        },
        signupService: {
            uri: '/auth/signup',
        },
        logoutService: {
            uri: '/auth/logout',
        },
    },

} 