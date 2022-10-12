import Axios, { AxiosRequestConfig } from 'axios';

// import { API_URL } from '../config';
const API_URL = "http://localhost:3000/";

function authRequestInterceptor(config: AxiosRequestConfig) {
    config!.headers!.Accept = 'application/json';

    return config;
}

export const axios = Axios.create({
    baseURL: API_URL
});

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error.response);
    }
)
