import stores from "../stores"
import {setDarkMode, setErrors, setLanguage} from "../stores/module/app.store"
import { setToken, setUser } from "../stores/module/auth.store"

export const serviceStoreSetToken = (value) => {
    stores.dispatch(setToken(value))
}

export const serviceStoreSetUser = (value) => {
    stores.dispatch(setUser(value))
}

export const serviceStoreSetDarkMode = (value) => {
    stores.dispatch(setDarkMode(value))
}

export const serviceStoreSetLanguage = (value) => {
    stores.dispatch(setLanguage(value))
    window.location.reload();
}

export const serviceStoreSetErrors = (value) => {
    stores.dispatch(setErrors(value))
}