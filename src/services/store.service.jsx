import stores from "../stores"
import { setDarkMode, setErrors } from "../stores/module/app.store"
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

export const serviceStoreSetErrors = (value) => {
    stores.dispatch(setErrors(value))
}