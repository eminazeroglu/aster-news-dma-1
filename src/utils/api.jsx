import axios from "axios";
import { serviceStoreSetErrors } from "../services/store.service";
import { notification } from "./helper";
import stores from "stores";

const service = () => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Max-Age': 86400,
        'Access-Control-Allow-Origin': '*',
    }

    const requestResolve = (config) => {
        serviceStoreSetErrors(false)
        const {language} = stores.getState().appStore;
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`
        if (language) config.headers['Content-Language'] = language

        return config;
    }

    const responseResolve = (res) => {
        return res.data;
    }

    const responseReject = (err) => {

        const error = err.response;

        if (error.status === 422) {
            serviceStoreSetErrors(error.data)
        }
        else if (error.status === 404) {
            notification('Axtardığınız məlumat tapılmadı', 'error')
        }


        return Promise.reject(err)

    }

    let instance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_BASE_URL,
        timeout: 0,
        headers
    })

    instance.interceptors.request.use(
        requestResolve
    )

    instance.interceptors.response.use(
        responseResolve,
        responseReject
    )

    return instance;
}

export const API = service();