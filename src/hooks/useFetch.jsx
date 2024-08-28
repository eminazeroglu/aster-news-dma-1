import { useState } from "react";
import { API } from "../utils/api";
import NewsApi from "../api/news.api";
import AuthorApi from "../api/author.api";
import AppApi from "api/app.api.jsx";

export const useFetch = (initialState = false) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialState);

    const fetchData = async (url, params = {}, list = true) => {
        try {
            setLoading(true)
            const res = await API.get(url, { params });
            setData(list ? res.data : res)
            setLoading(false)
        }
        catch(e) {
            setData(initialState)
            setLoading(false)
        }
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
        fetchData(NewsApi.all, params, false)
    }

    return [data, fetch, loading]
}

export const useFetchRandomAuthor = () => {
    const [data, fetchData, loading] = useFetch([]);

    const fetch = (limit) => {
        fetchData(AuthorApi.all, { random: true, limit })
    }

    return [data, fetch, loading]
}

export const useFetchAuthorBySlug = () => {
    const [data, fetchData, loading] = useFetch();

    const fetch = (slug) => {
        fetchData(AuthorApi.bySlug.replace(':slug', slug), {}, false)
    }

    return [data, fetch, loading]
}

export const useFetchNewsBySlug = () => {
    const [data, fetchData, loading] = useFetch();

    const fetch = (slug) => {
        fetchData(NewsApi.bySlug.replace(':slug', slug), {}, false)
    }

    return [data, fetch, loading]
}

export const useFetchNewsCommentById = () => {
    const [data, fetchData, loading] = useFetch([]);

    const fetch = (id) => {
        fetchData(NewsApi.comments.replace(':id', id), {}, false)
    }

    return [data.sort((a, b) => b.id - a.id), fetch, loading]
}

export const useFetchNewsByAuthor = () => {
    const [data, fetchData, loading] = useFetch();

    const fetch = (slug, params) => {
        fetchData(NewsApi.all, {authorSlug: slug, ...params}, false)
    }

    return [data, fetch, loading]
}

export const useFetchCategories = () => {
    const [data, fetchData, loading] = useFetch([]);

    const fetch = () => {
        fetchData(NewsApi.categories, {}, false)
    }

    return [data, fetch, loading]
}

export const useFetchCategoryBySlug = () => {
    const [data, fetchData, loading] = useFetch();

    const fetch = (slug) => {
        fetchData(NewsApi.categoryBySlug.replace(':slug', slug), {}, false)
    }

    return [data, fetch, loading]
}

export const useFetchOpenWeatherMap = () => {
    const [data, fetchData, loading] = useFetch();

    const fetch = (lat, lon) => {
        fetchData(AppApi.openWeatherMap, {
            lat,
            lon,
            appid: import.meta.env.VITE_APP_OPEN_WEATHER_KEY
        })
    }

    return [data, fetch, loading]
}