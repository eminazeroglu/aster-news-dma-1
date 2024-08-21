import { useState } from "react";
import { API } from "../utils/api";
import NewsApi from "../api/news.api";

export const useFetch = (initialState = false) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialState);

    const fetchData = async (url, params, list = true) => {
        setLoading(true)
        const res = await API.get(url, {params});
        setData(list ? res.data : res)
        setLoading(false)
    }

    return [
        data,
        fetchData,
        loading
    ]
}


export const useFetchNewsAll = () => {
    const [data, fetchData, loading] = useFetch([]);

    const fetch = (params = {}) => {
        fetchData(NewsApi.all, params)
    }

    return [data, fetch, loading]
}