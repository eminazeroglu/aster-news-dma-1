import {generatePath} from "react-router-dom";
import routers from "../router/router"
import {toast} from 'react-toastify';
import langAz from 'locales/az.json'
import langEn from 'locales/en.json'
import stores from "stores";

export const objectToQueryParams = (object) => {
    let query = '?';
    Object.keys(object).forEach(key => {
        query += `${key}=${object[key]}&`
    })
    return query.slice(0, -1)
}

export const route = (name, params = {}) => {
    const find = routers.find(i => i.name === name);
    objectToQueryParams(params)
    if (find) {
        if (Object.keys(params).length > 0) {
            if (find.path.includes('/:')) {
                return generatePath(find.path, params);
            }
            return find.path + objectToQueryParams(params);
        }
        return find.path
    }

    return '/'
}

export const dynamicImport = async () => {
    const modules = {};
    const moduleFiles = import.meta.glob('../modals/*.jsx');

    for (let path in moduleFiles) {
        try {
            const fileName = path.split('/').pop().replace('.jsx', '')
            const module = await moduleFiles[path]();
            modules[fileName] = module.default || module;
        } catch (e) {
            console.error(`Error importing ${moduleName}:`, error);
        }
    }

    return modules;
}

export const notification = (message, type = 'success') => {
    toast[type](message)
}

export const translate = (name) => {

    const {language} = stores.getState().appStore;

    const keys = name?.split('.');

    if (keys?.length > 0) {

        const translates = {
            az: langAz,
            en: langEn,
        }
        let result = translates[language];

        for (let key of keys) {
            if (result[key]) {
                result = result[key];
            } else {
                result = name;
            }
        }

        return result;
    }
}