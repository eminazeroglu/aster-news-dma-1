import { useLocation } from "react-router-dom";
import React, {useMemo} from 'react'

const useQuery = (key = false) => {
    const {search} = useLocation();
    const query = search.replace('?', '');

    return useMemo(() => {

        const splitQuery = query?.split('&');
        let object = {};

        splitQuery.forEach(param => {
            const [key, value] = param.split('=');
            object[key] = value;
        })

        if (key) return object[key]
        return object;
    }, [query])
}

export default useQuery