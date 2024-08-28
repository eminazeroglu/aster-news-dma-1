import React, {useState} from "react";
import {API} from "../utils/api";
import NewsApi from "../api/news.api";
import AuthorApi from "../api/author.api";
import AppApi from "api/app.api.jsx";
import axios from "axios";
import {
    WiCloud,
    WiCloudy,
    WiDayCloudy,
    WiDayShowers,
    WiDaySunny,
    WiDust,
    WiHail,
    WiLightning,
    WiSnow
} from "react-icons/wi";

export const useFetch = (initialState = false) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(initialState);

    const fetchData = async (url, params = {}, list = true) => {
        try {
            setLoading(true)
            const res = await API.get(url, {params});
            setData(list ? res.data : res)
            setLoading(false)
        } catch (e) {
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
        fetchData(AuthorApi.all, {random: true, limit})
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
    const [data, setData] = useState()

    const fetch = async (lat, lon) => {
        const res = await axios.get(AppApi.openWeatherMap, {
            params: {
                units: "metric",
                lat,
                lon,
                appid: import.meta.env.VITE_APP_OPEN_WEATHER_KEY
            }
        })
        const weatherType = {
            "clear sky": {
                name: 'Günəşli',
                icon: <WiDaySunny/>
            },
            "few clouds": {
                name: 'Az buludlu',
                icon: <WiDayCloudy/>
            },
            "scattered clouds": {
                name: 'Parçalı Buludlu',
                icon: <WiCloudy/>
            },
            "broken clouds": {
                name: 'Buludlu',
                icon: <WiCloud/>
            },
            "shower rain": {
                name: 'Güçlü Yağışlı',
                icon: <WiHail/>
            },
            "rain": {
                name: 'Yağışlı',
                icon: <WiDayShowers/>
            },
            "thunderstorm": {
                name: 'Şimşəkli',
                icon: <WiLightning/>
            },
            "snow": {
                name: 'Qarlı',
                icon: <WiSnow/>
            },
            "mist": {
                name: 'Rütubətli',
                icon: <WiDust/>
            },
        }
        if (res)
            setData({
                temp: Math.round(res.data.main.temp),
                name: res.data.name,
                type: weatherType[res.data.weather[0].description],
            })
    }

    return [data, fetch]
}